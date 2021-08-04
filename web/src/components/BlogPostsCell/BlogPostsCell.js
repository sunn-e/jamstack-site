
export const QUERY = gql`
  query POSTS {
    posts {
      data {
        title
        body
      }
    }
  }
`
export const Loading = () => <div>Loading...</div>
export const Empty = () => <div>Empty</div>
export const Failure = ({ error }) => <div>Error: {error.message}</div>

export const Success = ({ posts }) => {
  const {data} = posts
  return data.map(post => (
    <>
      <header>
        <h2>{post.title}</h2>
      </header>
      <p>{post.body}</p>
    </>
  ))
}