import { defineType, defineField } from 'sanity';

export default defineType({
  name: 'heroSection',
  title: 'Hero Section',
  type: 'document',
  fields: [
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
  ],
  preview: {
    prepare: () => ({ title: 'Hero Section' }),
  },
});
