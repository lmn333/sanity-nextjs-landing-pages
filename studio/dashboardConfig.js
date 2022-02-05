export default {
  widgets: [
    // {
    //   name: 'sanity-tutorials',
    //   options: {
    //     templateRepoId: 'sanity-io/sanity-template-nextjs-landing-pages'
    //   }
    // },
    { name: 'structure-menu' },
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '61fe633cb19bda11ccbd6ea7',
                  title: 'Sanity Studio',
                  name: 'sanity-nextjs-landing-pages-studio-kcfbg42g',
                  apiId: '06538b8d-4930-4ab6-a548-88f3552bf232'
                },
                {
                  buildHookId: '61fe633cfffbdbfd07980b8f',
                  title: 'Landing pages Website',
                  name: 'sanity-nextjs-landing-pages-web-3sbcf62x',
                  apiId: '106d577a-ea7a-4bc5-9b64-a7ea6e2a2926'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/lmn333/sanity-nextjs-landing-pages',
            category: 'Code'
          },
          { title: 'Frontend', value: 'https://sanity-nextjs-landing-pages-web-3sbcf62x.netlify.app', category: 'apps' }
        ]
      }
    },
    {
      name: 'document-list',
      options: { title: 'Recently edited', order: '_updatedAt desc', limit: 10, types: ['page'] },
      layout: { width: 'medium' }
    },
    { name: 'project-users', layout: { height: 'auto' } }
  ]
}
