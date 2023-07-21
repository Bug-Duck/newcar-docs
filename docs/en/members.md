---
layout: home

hero:
  name: Members
  tagline: BugDuck Open Source Team
---

<script setup>
import { VPTeamMembers } from 'vitepress/theme'

const members = [
  {
    avatar: 'https://avatars.githubusercontent.com/u/78635021?v=4',
    name: 'Liu Chenyang',
    title: 'Creator',
    links: [
      { icon: 'github', link: 'https://github.com/sheepbox8646' },
      { icon: 'twitter', link: 'https://twitter.com/AcboxSky' }
    ]
  },
  {
    avatar: 'https://avatars.githubusercontent.com/u/57032603?v=4',
    name: '27Onion Nebell',
    title: 'Programer',
    links: [
      { icon: 'github', link: 'https://github.com/onion108' },
      { icon: 'twitter', link: 'https://twitter.com/2Nebell' }
    ]
  },
  {
    avatar: 'https://avatars.githubusercontent.com/u/56634385?v=4',
    name: 'Sam Zhang',
    title: 'Programer',
    links: [
      { icon: 'github', link: 'https://github.com/samzhangjy' },
      { icon: 'twitter', link: 'https://twitter.com/samzhangjy' }
    ]
  },
  {
    avatar: 'https://avatars.githubusercontent.com/u/110272607?v=4',
    name: 'PrairieFire2b',
    title: 'Programer',
    links: [
      { icon: 'github', link: 'https://github.com/PrairieFire2b' },
    ]
  },
  {
    avatar: 'https://avatars.githubusercontent.com/u/73536163?v=4',
    name: 'Shizuku',
    title: 'Documentation',
    links: [
      { icon: 'github', link: 'https://github.com/ifshizuku' },
      { icon: 'twitter', link: 'https://twitter.com/ifszk' }
    ]
  },
]
</script>

<VPTeamMembers :members="members" />
