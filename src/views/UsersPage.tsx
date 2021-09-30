import { useState, useEffect, useCallback } from "react";
import { useQuery } from "@apollo/client";
import styled from "styled-components";
import { PageWrapper, PageContainer } from "../components/Page";
import { listUsers } from "../graphql/queries";
import { User } from "../graphql/schema.types";
import UserCard from "../components/UserCard";
import Button from "../components/Button";
import Input from "../components/Input";
import Loader from "../components/Loader";
import useDebounceState from "../hooks/useDebounceState";
import useSearchParams from "../hooks/useSearchParams";
import Alert from "../components/Alert/Alert";
import { NetworkStatus } from "@apollo/client";

// Constants
const PAGE_SIZE = 6;

export default function UsersPage() {
  const { param, changeParam } = useSearchParams("page", 1);
  const [searchKeyword, setSearchKeyword] = useState("");
  const debouncedSearchKeyword = useDebounceState(searchKeyword, 500);

  // Pagination Limit
  const getFetchLimit = useCallback(
    (pageSize: number) => {
      const currentPage = param ? parseInt(param) : 1;
      const fetchLimit = pageSize * currentPage;
      return fetchLimit;
    },
    [param]
  );

  // Fetch Query
  const { loading, error, data, refetch, fetchMore, networkStatus } = useQuery(listUsers, {
    variables: { filter: { name: { contains: "" } }, limit: getFetchLimit(PAGE_SIZE) },
    nextFetchPolicy: "cache-first",
  });

  // Load More
  async function handleLoadMore() {
    const currentPage = param ? parseInt(param) : 1;
    // changeParam(`${currentPage + 1}`); // ! PROBLEM AREA???
    await fetchMore({
      variables: {
        filter: { name: { contains: debouncedSearchKeyword } },
        nextToken: data.listUsers.nextToken,
        limit: getFetchLimit(PAGE_SIZE),
      },
    });
    changeParam(`${currentPage + 1}`);
  }

  // Search after interval
  useEffect(() => {
    const fetchLimit = getFetchLimit(PAGE_SIZE);
    refetch({
      filter: { name: { contains: debouncedSearchKeyword } },
      limit: fetchLimit,
    });
  }, [debouncedSearchKeyword, getFetchLimit, refetch]);

  return (
    <PageWrapper>
      <PageContainer>
        <UsersContainer>
          {/* User Search */}
          <div className="user__search">
            <h1>Users List</h1>
            <Input value={searchKeyword} onChange={(e) => setSearchKeyword(e.target.value)} placeholder="Search..." />
          </div>
          {/* Content */}
          <div className="content">
            {/* Alert */}
            {!loading && data?.listUsers?.items.length === 0 && <Alert>{"INFO :: There are currently no users in the database."}</Alert>}
            {!loading && error?.graphQLErrors && <Alert variant="error">{"INFO :: There are currently no users in the database."}</Alert>}
            {/* User List */}
            {!loading && data?.listUsers?.items ? (
              <ul className="user__list">
                {data?.listUsers?.items.map((user: User) => (
                  <li key={user?.id}>
                    <UserCard user={user} />
                  </li>
                ))}
              </ul>
            ) : (
              <div className="loader">
                <Loader />
              </div>
            )}
          </div>
          {/* Action */}
          <div className="user__load">
            <Button
              onClick={handleLoadMore}
              loading={loading || networkStatus === NetworkStatus.refetch}
              disabled={loading || networkStatus === NetworkStatus.refetch || !data?.listUsers?.nextToken}
            >
              Load More
            </Button>
          </div>
        </UsersContainer>
      </PageContainer>
    </PageWrapper>
  );
}

const UsersContainer = styled.div`
  padding: 8rem 0rem;
  display: flex;
  flex-direction: column;

  .user__search {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  .content {
    margin-top: 4rem;

    .loader {
      display: flex;
      justify-content: center;
    }

    .user__list {
      display: grid;
      justify-content: space-around;
      grid-template-columns: repeat(auto-fill, minmax(25rem, 1fr));
      gap: 4rem;
    }
  }

  .user__load {
    margin-top: 4rem;
    display: flex;
    justify-content: center;
  }
`;
