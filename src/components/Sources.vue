<template lang="html">
  <v-app class="background pb-5">
    <v-container fluid class="pa-0">
        <v-flex xs12 sm12 md8 offset-md2 lg8 offset-lg2 >
          <v-layout row wrap>
            <v-flex xs12 sm6 md6 lg4 v-for="source in sources" :key="source.name">
              <v-card :id="source.id" style="border-radius:3em;" hover ripple class="zoom ma-4 primary">
                <v-layout column wrap>
                  <v-flex sm2>
                  <a :href="source.link" target="_blank">
                    <v-card-media>
                      <img class="mx-auto pa-4 roundXXL shadow" style="height:18em;width:18em;" :src="source.logo" alt="">
                    </v-card-media>
                  </a>
                  </v-flex>
                  <v-divider class="secondary"></v-divider>
                  <v-flex sm8 class="pl-3" style="height:14em;">
                  <a :href="source.link" target="_blank">
                    <v-card-text class="text--text">
                      <h2 class="title--text mb-3">{{ source.name }}</h2>
                      <span>{{ source.title }}</span><br/>
                      <v-icon v-for="i in source.icons" :key="i" class="mt-2 accent--text">{{ i }}</v-icon>
                    </v-card-text>
                  </a>
                  </v-flex>
                  <v-divider class="secondary"></v-divider>
                  <v-flex sm2 class="pa-2 ">
                    <v-layout row>
                      <v-btn icon flat light class="mx-auto">
                        <vue-star style="z-index:1" color="#222222" animate="rubberBand">
                          <div slot="icon" style="user-select:none;cursor:pointer;" @click="source.liked = !source.liked"><v-icon medium :class="{ 'error--text' : source.liked, 'title--text' : !source.liked }" >{{ source.liked ? 'favorite' : 'favorite_border' }}</v-icon></div>
                        </vue-star>
                      </v-btn>

                      <v-btn icon flat light class="mx-auto">
                        <vue-star style="z-index:1" color="#222222" animate="rubberBand">
                          <div slot="icon" style="user-select:none;cursor:pointer;" @click="source.todo = !source.todo"><v-icon medium :class="{ 'warning--text' : source.todo, 'title--text ' : !source.todo }" >{{ source.todo ? 'star' : 'star_outline' }}</v-icon></div>
                        </vue-star>
                      </v-btn>

                      <v-btn v-clipboard:copy="source.link" icon flat light class="mx-auto pr-2">
                        <vue-star style="z-index:1" color="#222222" animate="rubberBand">
                          <div slot="icon" style="user-select:none;cursor:pointer;" @click="source.shared = !source.shared"><v-icon medium :class="{ 'accent--text' : source.shared, 'title--text' : !source.shared }" >share</v-icon></div>
                        </vue-star>
                      </v-btn>
                    </v-layout>
                  </v-flex>
                </v-layout>
              </v-card>
            </v-flex>
          </v-layout>
        </v-flex>
    </v-container>

    <app-nav :navs="navs"></app-nav>


  </v-app>
</template>

<script>
export default {
  data () {
    return {
      navs: [
        { name: 'Apps', href: '#apps', offset: -33, icon: 'developer_mode' },
        { name: 'Documentation', href: '#docs', offset: -33, icon: 'library_books' },
        { name: 'Video', href: '#video', offset: -33, icon: 'video_library' },
        { name: 'Other', href: '#other', offset: -33, icon: 'library_add' }
      ],
      sources: [
        {
          name: 'Mimo',
          id: 'apps',
          icons: ['developer_mode', 'attach_money'],
          title: 'Mimo is an app that teaches computer science in a fun and interactive way.',
          liked: false,
          shared: false,
          todo: false,
          link: 'https://getmimo.com/',
          logo: 'https://cdn-images-1.medium.com/max/1200/1*-jl0bB0xBBCypqT07hoPwA.png'
        },
        {
          name: 'Encode',
          id: 'apps',
          icons: ['developer_mode', 'attach_money'],
          title: 'Learn to code at your own pace, with Encode - your personal coding tutor.',
          liked: false,
          shared: false,
          todo: false,
          link: 'https://itunes.apple.com/us/app/encode-learn-to-code/id1198851756?mt=8',
          logo: 'https://is4-ssl.mzstatic.com/image/thumb/Purple128/v4/c5/f8/dc/c5f8dc1c-8de5-3b38-cc96-8fb3c99213c8/AppIcon-1x_U007emarketing-0-0-GLES2_U002c0-512MB-sRGB-0-0-0-85-220-0-0-0-5.png/246x0w.jpg'
        },
        {
          name: 'Py',
          id: 'apps',
          icons: ['developer_mode', 'attach_money'],
          title: 'Advance your career. Learn in-demand skills with free interactive courses.',
          liked: false,
          shared: false,
          todo: false,
          link: 'https://www.getpy.com/',
          logo: 'https://lh3.googleusercontent.com/QJn_8hG4PzDQ1JIiTrRkulyNUk3oMstwjCANkGnur8Xb8W8Em_yKoI6-IU2FYujofQ=w300'
        },
        {
          name: 'Lrn',
          id: 'apps',
          icons: ['developer_mode', 'attach_money'],
          title: 'Learn to code at your convenience.',
          liked: false,
          shared: false,
          todo: false,
          link: 'http://lrnapp.com/',
          logo: 'https://www.educationalappstore.com/images/upload/10257-logo-lrn-learn-to-code-at-your-convenience.jpg'
        },
        {
          name: 'Programming Hub',
          id: 'apps',
          icons: ['developer_mode', 'attach_money'],
          title: 'Your personal programming companion.',
          liked: false,
          shared: false,
          todo: false,
          link: 'https://www.programminghub.io/',
          logo: 'https://images-na.ssl-images-amazon.com/images/I/61QutevBNiL.png'
        },
        {
          name: 'Progate',
          id: 'apps',
          icons: ['developer_mode', 'attach_money'],
          title: 'Learn to code, learn to be creative.',
          liked: false,
          shared: false,
          todo: false,
          link: 'https://progate.com',
          logo: 'https://s3-ap-northeast-1.amazonaws.com/progate/shared/images/about/default.jpg'
        },
        {
          name: 'Code Hub',
          id: 'apps',
          icons: ['developer_mode', 'library_books'],
          title: 'Code Hub is the best way to browse and learn to program through your mother tongue.',
          liked: false,
          shared: false,
          todo: false,
          link: 'https://codehubplatform.github.io',
          logo: 'https://assets.materialup.com/uploads/10feff58-93ac-4351-8f1e-da898081054f/preview'
        },
        {
          name: 'SoloLearn',
          id: 'apps',
          icons: ['developer_mode'],
          title: 'Join the largest community of mobile code learners today.',
          liked: false,
          shared: false,
          todo: false,
          link: 'https://www.sololearn.com/',
          logo: 'https://cdn-images-1.medium.com/max/1200/1*QNimSWsBQxta_xt3XksQaw.png'
        },
        {
          name: 'Khanacademy',
          id: 'apps',
          icons: ['developer_mode', 'video_library', 'library_books'],
          title: 'You can learn anything. For free. For everyone. Forever.',
          liked: false,
          shared: false,
          todo: false,
          link: 'https://www.khanacademy.org',
          logo: 'https://cdn.kastatic.org/images/avatars/svg/leaf-green.svg'
        },
        {
          name: 'W3schools',
          icons: ['library_books'],
          id: 'docs',
          title: 'The world\'s largest web developer site.',
          liked: false,
          shared: false,
          todo: false,
          link: 'https://www.w3schools.com/',
          logo: 'https://store-images.s-microsoft.com/image/apps.30495.13510798887792718.c58f517f-a070-448d-9f42-44c93b19dcae.05c3b4ed-79d8-4d84-be6d-7d3290f1533e?w=180&h=180&q=60'
        },
        {
          name: 'MDN Web Docs',
          icons: ['library_books'],
          id: 'docs',
          title: 'Resources for developers, by developers.',
          liked: false,
          shared: false,
          todo: false,
          link: 'https://developer.mozilla.org',
          logo: 'https://avatars1.githubusercontent.com/u/7565578?s=280&v=4'
        },
        {
          name: 'DevDocs',
          icons: ['library_books'],
          id: 'docs',
          title: 'DevDocs combines multiple API documentations in a fast, organized, and searchable interface.',
          liked: false,
          shared: false,
          todo: false,
          link: 'https://devdocs.io/',
          logo: 'https://super-monitoring.com/blogpl/wp-content/uploads/2016/05/devdocs.png'
        },
        {
          name: 'Academind',
          id: 'video',
          icons: ['video_library'],
          title: 'Online Education, Real-Life Success.',
          liked: false,
          shared: false,
          todo: false,
          link: 'https://academind.com/',
          logo: 'https://www.eduonix.com/assets/images/profile_images/e1ae12f41bcf1bc107ca10c5556ba046.jpg'
        },
        {
          name: 'Traversy Media',
          id: 'video',
          icons: ['video_library'],
          title: 'Web Development Tutorials & Courses.',
          liked: false,
          shared: false,
          todo: false,
          link: 'http://www.traversymedia.com/',
          logo: 'https://yt3.ggpht.com/a-/ACSszfERZcJ2h63XXjXjV3e_uRhVsyO8ty9y-lgOvA=s900-mo-c-c0xffffffff-rj-k-no'
        },
        {
          name: 'Paul Halliday',
          id: 'video',
          icons: ['video_library'],
          title: 'Focused courses that take you from zero to hero without the fluff.',
          liked: false,
          shared: false,
          todo: false,
          link: 'https://paulhalliday.io/',
          logo: 'https://media.licdn.com/dms/image/C4E03AQGid9Nnkto70A/profile-displayphoto-shrink_200_200/0?e=1529877600&v=beta&t=bYjnroSJ9NSo1bdAUKBqSV68aCb7o510YLDqcCBBZoU'
        },
        {
          name: 'The Net Ninja',
          id: 'video',
          icons: ['video_library'],
          title: 'Kung Fu Your Web Skills.',
          liked: false,
          shared: false,
          todo: false,
          link: 'https://www.thenetninja.co.uk/',
          logo: 'https://www.eloquens.com/picture/190239304/300'
        },
        {
          name: 'Laracasts',
          id: 'video',
          icons: ['video_library'],
          title: 'It\'s Kinda Like Netflix for Your Career!',
          liked: false,
          shared: false,
          todo: false,
          link: 'https://laracasts.com/',
          logo: 'https://media.simplecast.com/episode/image/100715/small_1513187635-artwork.jpg'
        },
        {
          name: 'Chris Courses',
          id: 'video',
          icons: ['video_library'],
          title: 'The most clear and entertaining JavaScript tutorials on the web.',
          liked: false,
          shared: false,
          todo: false,
          link: 'https://www.chriscourses.com',
          logo: 'https://yt3.ggpht.com/-BYTUp_JKbQ8/AAAAAAAAAAI/AAAAAAAAAAA/UYcIBvvmQxw/s288-mo-c-c0xffffffff-rj-k-no/photo.jpg'
        },
        {
          name: 'FreeCodeCamp',
          id: 'other',
          icons: ['library_books', 'video_library'],
          title: 'Learn to code for free.',
          liked: false,
          shared: false,
          todo: false,
          link: 'https://www.freecodecamp.org/',
          logo: 'https://pbs.twimg.com/profile_images/692531829287567360/ytP7U362.png'
        },
        {
          name: 'The Odin Project',
          id: 'other',
          icons: ['library_books'],
          title: 'Your Career in Web Development Starts Here',
          liked: false,
          shared: false,
          todo: false,
          link: 'https://www.theodinproject.com/home',
          logo: 'https://www.theodinproject.com/assets/odin-logo-94557650fea28e24cc04263ece9c08ab5956e0d344faa4d03cdb732e9f9983d4.svg'
        },
        {
          name: 'Scotch',
          id: 'other',
          icons: ['library_books', 'video_library'],
          title: 'Code. eat. sleep. loop ✌. Fun and practical web development.',
          liked: false,
          shared: false,
          todo: false,
          link: 'https://scotch.io/',
          logo: 'https://pbs.twimg.com/profile_images/839897125655764994/GYd7zPsP.jpg'
        },
        {
          name: 'CodeCademy',
          id: 'other',
          icons: ['library_books', 'attach_money'],
          title: 'The Leaders in Online Coding.',
          liked: false,
          shared: false,
          todo: false,
          link: 'https://www.codecademy.com/',
          logo: 'http://news.codecademy.com/content/images/2017/12/square-logo.001.jpeg'
        },
        {
          name: 'Udacity',
          id: 'apps',
          icons: ['developer_mode', 'attach_money'],
          title: 'Master in-demand skills. Build and design amazing projects. Earn a valued credential. Be in demand.',
          liked: false,
          shared: false,
          todo: false,
          link: 'https://www.udacity.com/',
          logo: 'http://logo.kenh.net/logo/udacity.svg.png'
        },
        {
          name: 'Courseria',
          id: 'apps',
          icons: ['developer_mode', 'video_library', 'library_books', 'attach_money'],
          title: 'Take the world\'s best courses, online.',
          liked: false,
          shared: false,
          todo: false,
          link: 'https://www.coursera.org/',
          logo: 'https://is5-ssl.mzstatic.com/image/thumb/Purple128/v4/bd/c7/7f/bdc77f2a-c6d6-1128-1c2f-56a1d164b01a/AppIcon-1x_U007emarketing-85-220-0-6.png/1200x630bb.jpg'
        },
        {
          name: 'LinkedIn Learning',
          id: 'apps',
          icons: ['developer_mode', 'video_library', 'attach_money'],
          title: 'Personalized learning experiences, courses taught by real-world professionals.',
          liked: false,
          shared: false,
          todo: false,
          link: 'https://www.linkedin.com/learning/',
          logo: 'https://lh3.googleusercontent.com/WGnfuvo95Yporu_v1zBaDDpt5RLYh_eM1YMMu56pos4V81Ae2djhMfTPtAI50DhLglT4=w300'
        },
        {
          name: 'Udemy',
          id: 'apps',
          icons: ['developer_mode', 'video_library', 'library_books', 'attach_money'],
          title: 'Get skills in business, tech, and personal development.',
          liked: false,
          shared: false,
          todo: false,
          link: 'https://www.udemy.com',
          logo: 'https://cdn.worldvectorlogo.com/logos/udemy-1.svg'
        },
        {
          name: 'Plurasight',
          id: 'apps',
          icons: ['developer_mode', 'video_library', 'attach_money'],
          title: 'The technology learning platform.',
          liked: false,
          shared: false,
          todo: false,
          link: 'https://www.pluralsight.com/',
          logo: 'https://images-na.ssl-images-amazon.com/images/I/51-Hci2bYjL.png'
        },
        {
          name: 'TreeHouse',
          id: 'other',
          icons: ['video_library', 'library_books', 'attach_money'],
          title: 'Learn to code, gain a new skill, get a new job.',
          liked: false,
          shared: false,
          todo: false,
          link: 'https://teamtreehouse.com/explore',
          logo: 'https://davidwalsh.name/demo/treehouse-logo.png'
        },
        {
          name: 'Dash',
          id: 'other',
          icons: [],
          title: 'Learn to code awesome websites in HTML, CSS, and JavaScript.',
          liked: false,
          shared: false,
          todo: false,
          link: 'https://dash.generalassemb.ly/',
          logo: 'https://www.thebostoncalendar.com/system/events/photos/000/011/596/original/general-assembly.jpg?1443859773'
        },
        {
          name: 'Learn to code the hard way',
          id: 'other',
          icons: ['library_books', 'attach_money'],
          title: 'Now anyone can learn to code!',
          liked: false,
          shared: false,
          todo: false,
          link: 'https://learncodethehardway.org/',
          logo: 'https://learncodethehardway.org/images/logo-code.svg'
        }
      ]
    }
  }
}
</script>

<style scoped>
.shadow{
  filter: drop-shadow(0 0 .1em #555);
}
</style>
