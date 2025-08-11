export default function User({ user }) {
  const {
    followers,
    following,
    public_repos,
    login,
    name,
    avatar_url,
    created_at,
  } = user;

  const createdDate = new Date(created_at);

  return (
    <div className="user">
      <div>
        <img src={avatar_url} alt="User" className="avatar" />
      </div>
      <div>
        <a href={`https://github.com/${login}`}>{name || login}</a>
        <div className="name-container">
          <a href={`https://github.com/${login}`}>{name || login}</a>
          <p>
            User joined on{' '}
            {`${createdDate.getDate()} ${createdDate.toLocaleString('en-us', {
              month: 'short',
            })} ${createdDate.getFullYear()}`}
          </p>
        </div>
        <div className="profile-info">
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
    </div>
  );
}
