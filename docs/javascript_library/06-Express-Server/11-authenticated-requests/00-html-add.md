# HTML ADDITIONS
---
In this module we'll add more code to our HTML file. This code will be used for learning about authenticated requests and sharing data in the DOM.

<hr />

### Code
Let's add some code to our current `index.html` file. Note that you are putting more table rows into the existing table. You will under the closing `</tr>` tag in the 5th row and paste the following code:
```html
<!--INSERT THIS CODE AFTER ROW 5-->
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
                        <input type="text" id="pass" />
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
                    <td>Authenticated POST Reques to /authtest/create</td>
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
                        <code>/authtest/15</code>
                    </td>
                    <td>
                        <button onclick="getOneByUser();">Get Single Item</button>
                    </td>
                    <td>
                        See Console
                    </td>
                </tr>
                <tr>
                    <th scope="row">11</th>
                    <td>Update Single Item
                        <code>/authtest/15</code>
                    </td>
                    <td>
                        <button onclick="getOneByUser();">Get Item</button>
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
                        <code>/authtest/15</code>
                    </td>
                    <td>
                        <button onclick="deleteItem();">Delete Single Item</button>
                    </td>
                    <td>
                        See Console
                    </td>
                </tr>

```

### Test
You should see something similar to the following when you run the application:
![screenshot](assets/00-html.PNG)