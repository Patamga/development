import React, { useState, useEffect } from 'react'

const USERS_URL = 'https://5f32c583ec83300016137a8e.mockapi.io/api/v1/users?limit=10'
const get_users_url = (page) => `${USERS_URL}&page=${page}`
const NUMBER_OF_USERS = 75
export default function Table() {
  const [pageNumber, setPageNumber] = useState(1)
  const [usersData, setUsersData] = useState()
  
  const previous = pageNumber - 1 !== 0 ? pageNumber - 1 : 1
  const next = pageNumber + 1
  const last = Math.ceil(NUMBER_OF_USERS / 10)

  const previousDisable = pageNumber <= 1
  const nextDisable = pageNumber >= last

  useEffect(() => {
    fetch(get_users_url(pageNumber))
      .then((res) => res.json())
      .then((data) => {
        setUsersData(data)
      })
  }, [pageNumber])

    return (
      <div>
        <table className="table w-full">
          <thead>
            <tr>
              <th>ID</th>
              <th>First Name</th>
              <th>Last Name</th>
            </tr>
          </thead>
          <tbody>
            {typeof usersData !== 'undefined' &&
              usersData.map((user) => {
                return (
                  <tr key={user.id}>
                    <td>{user.id}</td>
                    <td>{user.firstName}</td>
                    <td>{user.lastName}</td>
                  </tr>
                )
              })}
          </tbody>
        </table>
        <section className="pagination">
          <button
            type="button"
            className="first-page-btn"
            onClick={() => setPageNumber(1)}
            disabled={previousDisable}
          >
            first
          </button>
          <button
            type="button"
            className="previous-page-btn"
            onClick={() => setPageNumber(previous)}
            disabled={previousDisable}
          >
            previous
          </button>
          <button
            type="button"
            className="next-page-btn"
            onClick={() => setPageNumber(next)}
            disabled={nextDisable}
          >
            next
          </button>
          <button
            type="button"
            className="last-page-btn"
            onClick={() => setPageNumber(last)}
            disabled={nextDisable}
          >
            last
          </button>
        </section>
      </div>
    )
}
