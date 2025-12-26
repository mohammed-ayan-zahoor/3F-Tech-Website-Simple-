export default function sitemap() {
    const baseUrl = 'https://www.3ftech.in';

    const routes = [
        '',
        '/about',
        '/courses',
        '/it-services',
        '/career',
        '/degrees',
        '/contact',
    ].map((route) => ({
        url: `${baseUrl}${route}`,
        lastModified: new URLSearchParams(new Date().toISOString()).toString().split('=')[0],
        changeFrequency: 'monthly',
        priority: route === '' ? 1 : 0.8,
    }));

    return routes;
}
