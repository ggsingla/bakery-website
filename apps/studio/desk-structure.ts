import type { StructureBuilder } from 'sanity/structure';

// Singletons are documents that should only have one instance
const singletonTypes = new Set(['companyInfo', 'homePage', 'aboutSection']);

const singletonListItem = (
  S: StructureBuilder,
  typeName: string,
  title: string
) =>
  S.listItem()
    .title(title)
    .id(typeName)
    .child(S.document().schemaType(typeName).documentId(typeName));

export const structure = (S: StructureBuilder) =>
  S.list()
    .title('Content')
    .items([
      // Document lists
      S.documentTypeListItem('product').title('Products'),
      S.documentTypeListItem('category').title('Categories'),

      S.divider(),

      // Singletons
      singletonListItem(S, 'companyInfo', 'Company Info'),
      singletonListItem(S, 'homePage', 'Home Page'),
      singletonListItem(S, 'aboutSection', 'About Section'),
    ]);

// Filter singletons from the "new document" menu
export const newDocumentOptions = (prev: any[]) =>
  prev.filter(
    (templateItem: any) => !singletonTypes.has(templateItem.templateId)
  );
