/**
 * Invokes GET request in '/routes/api/posts/+server.js'
 * See /routes/api/posts/+server.js for more information.
 * 
 * @returns API response as array
 */
export const load = async ({ fetch }) => {
    const fetchPosts = async () => {
        const result = await fetch('/api/posts')
        const data = await result.json()
        return data
    }

    // Ensure Promise is returned as an array
    // So that the response can be treated as an iterable
    const postData = await fetchPosts();

    return {
        props: postData
    }
}