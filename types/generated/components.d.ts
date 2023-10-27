import type { Schema, Attribute } from '@strapi/strapi';

export interface DyComponentLink extends Schema.Component {
  collectionName: 'components_work_component_links';
  info: {
    displayName: 'Link';
    icon: 'link';
    description: '';
  };
  attributes: {
    displayed_text: Attribute.String & Attribute.Required;
    url: Attribute.String & Attribute.Required & Attribute.DefaultTo<'/'>;
  };
}

export interface DyComponentListItem extends Schema.Component {
  collectionName: 'components_dy_component_list_items';
  info: {
    displayName: 'list-item';
    icon: 'bulletList';
  };
  attributes: {
    displayed_text: Attribute.String;
  };
}

declare module '@strapi/types' {
  export module Shared {
    export interface Components {
      'dy-component.link': DyComponentLink;
      'dy-component.list-item': DyComponentListItem;
    }
  }
}
