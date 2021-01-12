export interface Article {
    title?: string,
    slug?: string,
    articleBase?: any,
    published_at?: string
}
export interface Blog extends Article { }

export interface Portfolio extends Article { }