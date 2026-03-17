import { defineType, defineField } from 'sanity';

export default defineType({
  name: 'homePage',
  title: 'Home Page',
  type: 'document',
  fields: [
    defineField({
      name: 'badgeText',
      title: 'Badge Text',
      type: 'string',
      description: 'Text shown in the badge above the tagline (e.g. "100% Vegetarian")',
    }),
    defineField({
      name: 'tagline',
      title: 'Tagline',
      type: 'string',
      description: 'Main headline in the hero section',
      validation: rule => rule.required(),
    }),
    defineField({
      name: 'description',
      title: 'Description',
      type: 'text',
      description: 'Paragraph below the tagline',
    }),
    defineField({
      name: 'ctaPrimaryText',
      title: 'Primary CTA Text',
      type: 'string',
      initialValue: 'Explore Our Products',
    }),
    defineField({
      name: 'ctaSecondaryText',
      title: 'Secondary CTA Text',
      type: 'string',
      initialValue: 'Contact Us',
    }),
    defineField({
      name: 'heroImage',
      title: 'Hero Image',
      type: 'image',
      options: { hotspot: true },
    }),
    defineField({
      name: 'featuredHeading',
      title: 'Featured Section Heading',
      type: 'string',
      initialValue: 'Featured Products',
    }),
    defineField({
      name: 'featuredSubheading',
      title: 'Featured Section Subheading',
      type: 'string',
      initialValue: 'Our most popular items, loved by customers',
    }),
  ],
  preview: {
    prepare: () => ({ title: 'Home Page' }),
  },
});
