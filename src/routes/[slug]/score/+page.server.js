export async function load({ params, url }) {
    let score = url.searchParams.get('score');

    return { score };
}
