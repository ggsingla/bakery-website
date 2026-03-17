import { defineConfig } from 'sanity';
import { structureTool } from 'sanity/structure';
import { visionTool } from '@sanity/vision';
import { schemaTypes } from './schemas';
import { structure, newDocumentOptions } from './desk-structure';

export default defineConfig({
  name: 'cake-paradise',
  title: 'Cake Paradise Studio',
  projectId: 'qij3vxam',
  dataset: 'production',
  plugins: [structureTool({ structure }), visionTool()],
  schema: {
    types: schemaTypes,
  },
  document: {
    newDocumentOptions,
  },
});
