export default function User({ user }) {
  const {
    avatar_url,
    followers,
    following,
    public_repos,
    name,
    login,
    created_at,
  } = user;

  const createDate = new Date(created_at);

  return (
    <div className="user">
      <div>
        <img src={avatar_url} className="avtar" alt="User" />
      </div>
      <div className="name-container">
        <a href={`https://github.com/${login}`}>{name || login}</a>
        <p>
          User joined on{" "}
          {`${createDate.getDate()} ${createDate.toLocaleString("en-us", {
            month: "short",
          })} ${createDate.getFullYear()}`}
        </p>
      </div>
      <div className="profi-info">
        <div>
          <p>Public Repos</p>
          <p>{public_repos}</p>
        </div>
        <div>
          <p>Followers</p>
          <p>{followers}</p>
        </div>
        <div>
          <p>Following</p>
          <p>{following}</p>
        </div>
      </div>
    </div>
  );
}
