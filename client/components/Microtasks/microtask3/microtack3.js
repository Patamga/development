import React from 'react'


const USERS_URL = 'http://5f32c583ec83300016137a8e.mockapi.io/api/v1/users?limit=10';
const NUMBER_OF_USERS = 75
export default function Table () {
    return (
        <div>
            <table className="table">
            <thead>
                <tr>
                    <th>ID</th>
                    <th>First Name</th>
                    <th>Last Name</th>
                </tr>
            </thead>
                <tbody></tbody>
            </table>
        <section className="pagination">
            <button className="first-page-btn">first</button>
            <button className="previous-page-btn">previous</button>
            <button className="next-page-btn">next</button>
            <button className="last-page-btn">last</button>
        </section>
    </div>
    );
};
