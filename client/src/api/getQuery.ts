export function getQuery(): string {
    const query: string = `
        query {
            cars {
            id
            brand
            model
            color
            model_year
            description
            img_src
            price
            availability
            }
        }
        `;

    return query;
}