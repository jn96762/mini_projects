const APIURL = 'https://api.github.com/users/';

const main = document.getElementById('main');
const form = document.getElementById('form');
const search = document.getElementById('search');

form.addEventListener('submit', (e) => {
    e.preventDefault()

    const user = search.value;

    if (user) {
        getUser(user);
        search.value = '';
    }
})

async function getUser(username) {
    try {
        const { data } = await axios(APIURL + username)
        createUserCard(data);
        getRepos(username)
    } catch(err) {
        if(err.response.status == 404) {
            createErrorCard('User not found.')
        }
    }
}

async function getRepos(username) {
    try {
        const { data } = await axios(APIURL + username + '/repos?sort=created')
        addRepoLinks(data);
    } catch(err) {
            createErrorCard('Problem fetching repos.')
    }
}

function createUserCard(user) {   
    const cardHTML = `
        <div class="card">
            <div>
                <img src="${user.avatar_url}" alt="profile-picture" class="avatar">
            </div>
            <div class="user-info">
                <h2>${user.name}</h2>
                <p>${user.bio}</p>

                <ul>
                    <li>${user.followers} <strong>Followers</strong></li>
                    <li>${user.following} <strong>Following</strong></li>
                    <li>${user.public_repos} <strong>Repos</strong></li>
                </ul>

                <div id="repos"></div>
            </div>
        </div>
    `
    main.innerHTML = cardHTML;
}

function createErrorCard(msg) {
    const cardHTML = `
        <div class="card">
            <div>
                <img src="https://as1.ftcdn.net/v2/jpg/03/37/03/80/1000_F_337038060_Qop3sB2npXc96CUqt8DPcNvZKWEXSHLj.jpg" alt="profile-picture" class="avatar">
            </div>
            <div class="user-info">
                <h2>404</h2>
                <p>${msg}</p>
                <p>Please enter a different username</p>
            </div>
        </div>
    `
    main.innerHTML = cardHTML;
}

function addRepoLinks(repos) {
    const reposEl = document.getElementById('repos')

    repos
        .slice(0, 10)
        .forEach(repo => {
            const repoEl = document.createElement('a')
            repoEl.classList.add('repo')
            repoEl.href = repo.html_url
            // to open target in a new window
            repoEl.target = '_blank'
            repoEl.innerText = repo.name

            reposEl.appendChild(repoEl)
        })
}