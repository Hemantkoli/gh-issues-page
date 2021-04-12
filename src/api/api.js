import axios from 'axios'
const url="https://api.github.com"

const githubToken=process.env.REACT_APP_GITHUB_API_TOKEN;
export const fetchIssues=async () =>{
    return await axios.get(`${url}/search/issues?q={react}&per_page=100&page_number=1&state=all`,
    {
        headers:{
            Authorization: `token ${githubToken}`
        }
    }
    );
};

export const getIssues=async()=>{
    const issues=await fetchIssues()
    return await issues.data.items
}

export const fetchIssueReadme= async urlIssue =>{
    return await axios.get(`${urlIssue}/readme`)
}

export const renderIssueReadme= async urlReadme =>{
    return await axios.get(urlReadme)
}

export const getComments =async urlComments=>{
    return await axios.get(urlComments)
}