import React, { Fragment } from 'react';
import styled from 'styled-components';


const Paragraph = styled.p`
    margin-top: 10px;
    line-height: 1.5rem;
`;

const Heading1 = styled.h1`
    font-size: 1.8rem;
`;

const Heading2 = styled.h2`
    font-size: 1.5rem;
    margin: 20px 0;
`;

const Heading3 = styled.h3`
    font-size: 1.2rem;
    margin: 10px 0;
`;

const OrderedList = styled.ol`
    li {
        list-style: decimal;
        margin-bottom: 10px;
        
        &:last-child {
            margin-bottom: 20px;
        }
    }
`;

const Home = () => (
    <Fragment>
        <Heading1>
            Frontend challenge
        </Heading1>
        <Paragraph>
            We’d like you to have a look at the following task and submit your solution as a git repository. We’re
            interested in seeing how you approach the task and how you structure the application code.
        </Paragraph>
        <Paragraph>
            We want you to deliver an app that you feel demonstrates your skills and that you personally can be happy
            with given the time and your familiarity with the technologies. If you don’t have time to polish up
            everything, we’d like you to prioritize what you think are the most important features and explain to us how
            you decided how to go about the development.
        </Paragraph>

        <Paragraph>
            Implement it within a week by committing the code changes to a Git repository (GitHub, GitLab Bitbucket,
            it’s up to you. We would like to view the code afterward in a browser and clone it to run it).
        </Paragraph>

        <Paragraph>
            Feel free to use any API you like as a source of content. (e.g. PokéAPI, Star Wars API, JSONPlaceholder,
            etc).
        </Paragraph>
        <Paragraph>
            It’s possible that you’ll need a bit more time to solve the tasks or you have questions about this
            challenge. Please let us know, so we can assist with any questions you might have.

        </Paragraph>
        <Paragraph>
            We hope you enjoy it.
        </Paragraph>

        <Heading2>Scenario</Heading2>
        <Heading3>PWA</Heading3>
        <OrderedList>
            <li>Create a PWA.</li>
            <li>Create a page with a list of categories (e.g. Pokémons, Star Wars characters, users,
                etc).
            </li>
            <li>Create a page to show the category details (e.g. Pokémon detail, Star Wars character
            detail, user detail, etc).</li>
            <li>Create any other features which are important to you.</li>
        </OrderedList>

        <Heading3>Tracker library</Heading3>
        <OrderedList>
            <li>Create your own JavaScript library for tracking user events.</li>
            <li>Add your tracker library to the PWA.</li>
            <li>This library should track user events and store them in localStorage.</li>
        </OrderedList>

    </Fragment>

);

export default Home;
