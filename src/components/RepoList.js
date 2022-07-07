import React from "react"

export default function RepoList(props) {
  const { repos } = props;

    return (
        <>
        <table className='table table-striped' aria-labelledby="tabelLabel">
          <thead>
            <tr>
              <th>Name (C)</th>
              <th>Size</th>
              <th>Last Update</th>
              <th>Language</th>
            </tr>
          </thead>
          <tbody>
            {repos.map(repo =>
              <tr key={repo.id}>

                <td>{repo.name}</td>
                <td>{repo.size}</td>
                <td>{repo.updated_at}</td>
                <td>{repo.language}</td>
              </tr>
            )}
          </tbody>
      </table>
      </>
    )
}