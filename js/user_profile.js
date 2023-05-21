let information = `<form action="#">
                    <table class="table table-dark">
                        <thead>
                        <tr></tr>
                        </thead>
                        <tbody>
                        <tr>
                            <th scope="row"></th>
                            <td>First Name</td>
                            <td>${sessionStorage.getItem('firstName')}</td>
                        </tr>
                        <tr>
                            <th scope="row"></th>
                            <td>Last Name</td>
                            <td>${sessionStorage.getItem('SecondName')}</td>
                        </tr>
                        <tr>
                            <th scope="row"></th>
                            <td>Email</td>
                            <td>${sessionStorage.getItem('Email')}</td>
                        </tr>
                        <tr>
                            <th scope="row"></th>
                            <td>Sex</td>
                            <td>${sessionStorage.getItem('Sex')}</td>
                        </tr>
                        <tr>
                            <th scope="row"></th>
                            <td>Date of Birth</td>
                            <td>${sessionStorage.getItem('birthday')}<</td>
                        </tr>
                        </tbody>
                    </table>
                    </form>`

document.querySelector('#information').innerHTML = information