/**
 * Explicit sidebar for AssemBLYA docs.
 * Topic hierarchy: Getting Started → Specifications → User Guide → Development
 */

// @ts-check

/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
  docsSidebar: [
    {
      type: 'category',
      label: 'Getting Started',
      collapsed: false,
      link: {
        type: 'generated-index',
        title: 'Getting Started',
        description:
          'Start here: overview, mission, and orientation for AssemBLYA.',
        slug: '/getting-started',
      },
      items: [
        'getting-started/intro',
        'getting-started/overview',
        'getting-started/mission',
      ],
    },
    {
      type: 'category',
      label: 'Specifications',
      collapsed: false,
      link: {
        type: 'generated-index',
        title: 'Specifications',
        description:
          'Roadmap, systems, and 3D references for the AssemBLYA platform.',
        slug: '/specifications',
      },
      items: [
        'specifications/roadmap',
        'specifications/3d/readme',
        {
          type: 'category',
          label: 'Systems',
          collapsed: true,
          link: {
            type: 'generated-index',
            title: 'Systems',
            description: 'Product and prototype systems under AssemBLYA.',
            slug: '/specifications/systems',
          },
          items: [
            'specifications/systems/houdini/readme',
            'specifications/systems/houdini/3d/readme',
            'specifications/systems/model-222/dissasembled',
            'specifications/systems/vampire-style/readme',
          ],
        },
      ],
    },
    {
      type: 'category',
      label: 'User Guide',
      collapsed: true,
      link: {
        type: 'generated-index',
        title: 'User Guide',
        description: 'Orders, communication, and practical working notes.',
        slug: '/user-guide',
      },
      items: ['user-guide/orders/readme', 'user-guide/communication/readme'],
    },
    {
      type: 'category',
      label: 'Development',
      collapsed: true,
      link: {
        type: 'generated-index',
        title: 'Development',
        description: 'Research, competitor teardowns, and development notes.',
        slug: '/development',
      },
      items: [
        {
          type: 'category',
          label: 'Competitors',
          collapsed: true,
          link: {
            type: 'generated-index',
            title: 'Competitors',
            description: 'Field systems and teardowns used as references.',
            slug: '/competitors',
          },
          items: [
            'development/competitors/research',
            {
              type: 'category',
              label: 'Steel Hornets',
              collapsed: true,
              link: {
                type: 'doc',
                id: 'development/competitors/steel-hornets/readme',
              },
              items: [
                'development/competitors/steel-hornets/plan',
                'development/competitors/steel-hornets/eng',
                'development/competitors/steel-hornets/ua',
                {
                  type: 'category',
                  label: 'Model 111',
                  collapsed: true,
                  link: {
                    type: 'doc',
                    id: 'development/competitors/steel-hornets/111/readme',
                  },
                  items: ['development/competitors/steel-hornets/111/xxx'],
                },
                {
                  type: 'category',
                  label: 'Model 222',
                  collapsed: true,
                  link: {
                    type: 'doc',
                    id: 'development/competitors/steel-hornets/222/readme',
                  },
                  items: [
                    'development/competitors/steel-hornets/222/dissasembled',
                  ],
                },
                'development/competitors/steel-hornets/cheap-steal/readme',
                'development/competitors/steel-hornets/cheap-steel-hornets-drop/readme',
              ],
            },
            {
              type: 'category',
              label: 'Nayavu',
              collapsed: true,
              link: {
                type: 'doc',
                id: 'development/competitors/nayavu/readme',
              },
              items: [
                'development/competitors/nayavu/1/readme',
                'development/competitors/nayavu/2/readme',
              ],
            },
            'development/competitors/nazarium/readme',
            'development/competitors/butterfly-case/readme',
            'development/competitors/vaaamp-drop/readme',
          ],
        },
      ],
    },
  ],
};

module.exports = sidebars;
