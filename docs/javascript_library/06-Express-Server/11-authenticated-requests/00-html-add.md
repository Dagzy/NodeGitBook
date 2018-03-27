# HTML ADDITIONS
---
Before we get started working on our client on making authenticated requests to our authenticated routes, we'll add more code to our HTML file. 

<hr />

### Code
Add the following code to our current `index.html` file. NOTE: You will be adding to the existing table in the file. These are more rows for that table. You will add this code under the closing `</tr>` tag in the 5th row. Please copy and paste the following code for now:

```html
<!--PASTE THIS CODE AFTER ROW 5-->
                <tr>
                    <th scope="row">6</th>
                    <td>POST Sign Up
                        <code>/authtest/createuser</code>
                    </td>
                    <td>
                        <span></span>
                        <input type="text" id="user" />
                        </span>
                        <span></span>
                        <input type="password" id="pass" />
                        </span>
                        <span></span>
                        <button onclick="userSignUp();">Submit</button>
                        </span>
                    </td>
                    <td>
                        See Console
                    </td>
                </tr>
                <tr>
                    <th scope="row">7</th>
                    <td>Function: Get Session Token</td>
                    <td>
                        <button onclick="getSessionToken();">Print Token</button>
                    </td>
                    <td>
                        See Console
                    </td>
                </tr>
                <tr>
                    <th scope="row">8</th>
                    <td>Authenticated Request
                        <code>/authtest/one</code>
                    </td>
                    <td>
                        <button onclick="fetchFromAuthRouteOne();">GET</button>
                    </td>
                    <td>
                        See Console
                    </td>
                </tr>
                <tr>
                    <th scope="row">9</th>
                    <td>Authenticated POST Request to /authtest/create</td>
                    <td>
                        <input type="text" id="authTestData" />
                        <button onclick="postToAuthRouteCreate();">POST</button>
                    </td>
                    <td>
                        See Console
                    </td>
                </tr>

                <tr>
                    <th scope="row">10</th>
                    <td>GET Single Item
                        <code>/authtest/:id</code>
                    </td>
                    <td>
                        <button onclick="getOneByUser();">Get Single Item</button>
                    </td>
                    <td>
                        See Field Below
                    </td>
                </tr>
                <tr>
                    <th scope="row">11</th>
                    <td>Update Single Item
                        <code>/authtest/:id</code>
                    </td>
                    <td>
                        <button onclick="updateItem();">Update Item</button>
                    </td>
                    <td>
                        <section class="auth-test-put">
                        </section>
                    </td>
                </tr>

                <tr>
                    <th scope="row">12</th>
                    <td>Delete Single Item
                        <code>/authtest:id</code>
                    </td>
                    <td>
                        <button onclick="deleteItem();">Delete Single Item</button>
                    </td>
                    <td>
                        See Console
                    </td>
                </tr>
                <tr>
                    <th scope="row">13</th>
                    <td>Delete Single Item</td>
                    <td>
                        <button onclick="fetchFromOneDisplayData();">Display data</button>
                    </td>
                    <td>
                        <ul id="thirteen">
                        </ul>
                    </td>

                    <!--TODO:
                    See the ids by user.
                    Enter an id into an input field
                    Call the delete method w/ interpolation.
                    -->
                </tr>

```

### Analysis
Take a minute to check through the additions. Notice that we've added the following:
1. 8 more table rows 
2. Buttons, lists, and input fields added to various rows.
3. Classes and ids in elements for future use.  
4. Names of functions that we will soon create.

### Test
1. You should see something similar to the following when you run the application:
![screenshot](assets/00-html.PNG)