// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default function handler(req, res) {

  res.status(200).json(
    [{
      key: 1,
      title: "Documentation",
      description: "Find in-depth information about Next.js features and API."
    },
    {
      key: 2,
      title: "Learn",
      description: "Find in-depth information about Next.js features and API."
    }, {
      key: 3,
      title: "Examples",
      description: "Find in-depth information about Next.js features and API."
    }, {
      key: 4,
      title: "Deploy",
      description: "Find in-depth information about Next.js features and API."
    }]
  )
}
