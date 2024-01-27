/* eslint-disable global-require */

import {translate} from '@docusaurus/Translate';
import {sortBy} from '@site/src/utils/jsUtils';
// Import each project portfolio post. Yes, I know there has to be a way to import the whole directory and iterate over it, but I can't figure out how. Since I add new portfolio posts so infrequently, it's not worth the trouble right now, but eventually it may be.
// ADD NEW PROJECTS HERE
import * as articles from '@site/portfolio/articles.mdx';
import * as be_heard from '@site/portfolio/be-heard.mdx';
import * as box_of_mirrors from '@site/portfolio/box-of-mirrors.mdx';
import * as data_and_power from '@site/portfolio/data-and-power.mdx';
import * as enlightenment from '@site/portfolio/enlightenment.mdx';
import * as fartism from '@site/portfolio/fartism.mdx';
import * as font from '@site/portfolio/font.mdx';
import * as green_education from '@site/portfolio/green-education.mdx';
import * as metaphysics from '@site/portfolio/metaphysics.mdx';
import * as photography from '@site/portfolio/photography.mdx';
import * as reverie from '@site/portfolio/reverie.mdx';
import * as songwriting from '@site/portfolio/songwriting.mdx';
import * as the_truths_of_fake_news from '@site/portfolio/the-truths-of-fake-news.mdx';
import * as the_two_cent_pledge from '@site/portfolio/the-two-cent-pledge.mdx';
import * as trump_donald from '@site/portfolio/trump-donald.mdx';
import * as verified_inc from '@site/portfolio/verified-inc.mdx';
import * as what_im_working_on from '@site/portfolio/what-im-working-on.mdx';
import * as young_scientist_challenge from '@site/portfolio/young-scientist-challenge.mdx';

// AND HERE!
/*
  Pro Tip: add your site in alphabetical order.
  Appending your site here (at the end) is more likely to produce Git conflicts.
*/
const Projects = [
  articles,
  be_heard,
  box_of_mirrors,
  data_and_power,
  enlightenment,
  fartism,
  font,
  green_education,
  metaphysics,
  photography,
  reverie,
  songwriting,
  the_truths_of_fake_news,
  the_two_cent_pledge,
  trump_donald,
  verified_inc,
  what_im_working_on,
  young_scientist_challenge,
];

// This showcase is built off of the Docusaurus website project

/*
 * ADD YOUR SITE TO THE DOCUSAURUS SHOWCASE
 *
 * Please don't submit a PR yourself: use the Github Discussion instead:
 * https://github.com/facebook/docusaurus/discussions/7826
 *
 * Instructions for maintainers:
 * - Add the site in the json array below
 * - `title` is the project's name (no need for the "Docs" suffix)
 * - A short (≤120 characters) description of the project
 * - Use relevant tags to categorize the site (read the tag descriptions on the
 *   https://docusaurus.io/showcase page and some further clarifications below)
 * - Add a local image preview (decent screenshot of the Docusaurus site)
 * - The image MUST be added to the GitHub repository, and use `require("img")`
 * - The image has to have minimum width 640 and an aspect of no wider than 2:1
 * - If a website is open-source, add a source link. The link should open
 *   to a directory containing the `docusaurus.config.js` file
 * - Resize images: node admin/scripts/resizeImage.js
 * - Run optimizt manually (see resize image script comment)
 * - Open a PR and check for reported CI errors
 *
 * Example PR: https://github.com/facebook/docusaurus/pull/7620
 */

// LIST OF AVAILABLE TAGS
export type TagType =
  | 'Activism'
  | 'Art'
  | 'Business'
  | 'Charity'
  | 'Coming_Soon'
  | 'Design'
  | 'Education'
  | 'Highlighted'
  | 'Humor'
  | 'Math'
  | 'Music'
  | 'Philosophy'
  | 'Photography'
  | 'Politics'
  | 'Science'
  | 'Sculpture'
  | 'Technology'
  | 'Writing';

// Add sites to this list
// prettier-ignore
const Users: User[] = [];

Projects.forEach( (project) => {
  Users.push({
    slug: project.frontMatter.slug,
    title: project.frontMatter.title,
    description: project.frontMatter.description,
    preview: project.frontMatter.image,
    date: project.frontMatter.date,
    tags: project.frontMatter.tags,
  });
});

export type User = {
  title: string;
  description: string;
  preview: string | null; // null = use our serverless screenshot service
  slug: string;
  date: string;
  tags: TagType[];
};

export type Tag = {
  label: string;
  description: string;
  color: string;
};

export const Tags: {[type in TagType]: Tag} = {
  Activism: {
    label: translate({message: 'Activism'}),
    description: translate({
      message:
        '',
      id: 'showcase.tag.activism.description',
    }),
    color: '#e6194B',
  },

  Art: {
    label: translate({message: 'Art'}),
    description: translate({
      message: '',
      id: 'showcase.tag.art.description',
    }),
    color: '#4363d8',
  },

  Business: {
    label: translate({message: 'Business'}),
    description: translate({
      message: '',
      id: 'showcase.tag.business.description',
    }),
    color: '#808000',
  },

  Charity: {
    label: translate({message: 'Charity'}),
    description: translate({
      message: '',
      id: 'showcase.tag.charity.description',
    }),
    color: '#0dbc3d',
  },

  Coming_Soon: {
    label: translate({message: 'Coming Soon'}),
    description: translate({
      message: '',
      id: 'showcase.tag.conming_soon.description',
    }),
    color: '#aaffc3',
  },

  Design: {
    label: translate({message: 'Design'}),
    description: translate({
      message: '',
      id: 'showcase.tag.design.description',
    }),
    color: '#fffac8',
  },

  Education: {
    label: translate({message: 'Education'}),
    description: translate({
      message: '',
      id: 'showcase.tag.education.description',
    }),
    color: '#9A6324',
  },

  Highlighted: {
    label: translate({message: 'Highlighted'}),
    description: translate({
      message: '',
      id: 'showcase.tag.highlighted.description',
    }),
    color: '#ffe119',
  },

  Humor: {
    label: translate({message: 'Humor'}),
    description: translate({
      message: '',
      id: 'showcase.tag.humor.description',
    }),
    color: '#dcbeff',
  },

  Math: {
    label: translate({message: 'Math'}),
    description: translate({
      message: '',
      id: 'showcase.tag.math.description',
    }),
    color: '#000000',
  },

  Music: {
    label: translate({message: 'Music'}),
    description: translate({
      message: '',
      id: 'showcase.tag.music.description',
    }),
    color: '#aaffc3',
  },

  Philosophy: {
    label: translate({message: 'Philosophy'}),
    description: translate({
      message: '',
      id: 'showcase.tag.philosophy.description',
    }),
    color: '#a9a9a9', // Facebook blue
  },

  Photography: {
    label: translate({message: 'Photography'}),
    description: translate({
      message: '',
      id: 'showcase.tag.photography.description',
    }),
    color: '#000075',
  },

  Politics: {
    label: translate({message: 'Politics'}),
    description: translate({
      message: '',
      id: 'showcase.tag.politics.description',
    }),
    color: '#911eb4',
  },

  Science: {
    label: translate({message: 'Science'}),
    description: translate({
      message: '',
      id: 'showcase.tag.science.description',
    }),
    color: '#fabed4',
  },

  Sculpture: {
    label: translate({message: 'Sculpture'}),
    description: translate({
      message: '',
      id: 'showcase.tag.sculpture.description',
    }),
    color: '#800000',
  },

  Technology: {
    label: translate({message: 'Technology'}),
    description: translate({
      message: '',
      id: 'showcase.tag.technology.description',
    }),
    color: '#f032e6',
  },

  Writing: {
    label: translate({message: 'Writing'}),
    description: translate({
      message: '',
      id: 'showcase.tag.writing.description',
    }),
    color: '#ffd8b1',
  },
};

export const TagList = Object.keys(Tags) as TagType[];
function sortUsers() {
  let result = Users;
  // Sort by site name
  // result = sortBy(result, (user) => user.title.toLowerCase());
  // Sort by date (most recent first)
  result = sortBy(result, (user) => user.date).reverse();
  // Sort by highlighted tag, highlighted first
  result = sortBy(result, (user) => !user.tags.includes('Highlighted'));
  return result;
}

export const sortedUsers = sortUsers();
