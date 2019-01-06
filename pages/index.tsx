import React from 'react';

import Layout from '../components/layout/index';
import ArticleVideo from '../components/sections/article_home';
import ArticlePresentation from '../components/sections/article_presentation';
import ArticlePrice from '../components/sections/article_price';
import ArticleContact from '../components/sections/article_contact';

export default class Index extends React.Component {
    render() {
        return (
            <Layout>
                <article className="article-home" id="ref-home">
                    <ArticleVideo /> 
                </article>
                <article className="article-presentation" id="ref-presentation">
                    <ArticlePresentation /> 
                </article>
                <article className="article-price" id="ref-price">
                    <ArticlePrice /> 
                </article>
                <article className="article-contact" id="ref-contact">
                    <ArticleContact /> 
                </article>
            </Layout>
        );
    }
}