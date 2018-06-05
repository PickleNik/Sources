export default {
  state: {
    branches: [
      { name: 'Basics',
        description: 'HTML, CSS and JavaScript will open to you the world of Web Development.',
        id: 'basics',
        leafs: [
          { name: 'HTML',
            title: 'HTML - HyperText Markup Language',
            to: 'html',
            logo: 'https://www.shareicon.net/download/2015/09/08/97875_html_512x512.png',
            whatIsVideo: 'https://www.youtube.com/embed/3V2q5E4wwko',
            wiki: 'https://en.wikipedia.org/wiki/HTML',
            next: [
              { name: 'CSS', color: 'blue', to: 'leaf-css', icon: 'brands/css3-alt' }
            ],
            sources: [
              { name: 'SoloLearn',
                todo: false,
                starred: false,
                shared: false,
                link: 'https://www.sololearn.com/Course/HTML/',
                logo: 'http://mrslamarche.com/wp-content/uploads/2016/08/com.sololearn.htmltrial-w250.png',
                icon: 'devices' },

              { name: 'Khanacademy',
                todo: false,
                starred: false,
                shared: false,
                link: 'https://www.khanacademy.org/computing/computer-programming/html-css/#intro-to-html',
                logo: 'https://cdn.kastatic.org/images/avatars/svg/leaf-green.svg',
                icon: 'devices' },

              { name: 'W3schools',
                todo: false,
                starred: false,
                shared: false,
                link: 'https://www.w3schools.com/html/',
                logo: 'https://store-images.s-microsoft.com/image/apps.30495.13510798887792718.c58f517f-a070-448d-9f42-44c93b19dcae.05c3b4ed-79d8-4d84-be6d-7d3290f1533e?w=180&h=180&q=60',
                icon: 'library_books' },

              { name: 'MDN',
                todo: false,
                starred: false,
                shared: false,
                link: 'https://developer.mozilla.org/en-US/docs/Web/HTML',
                logo: 'https://mdn.mozillademos.org/files/6457/mdn_logo_only_color.png',
                icon: 'library_books' },

              { name: 'Stefan Mischook',
                todo: false,
                starred: false,
                shared: false,
                link: 'https://www.youtube.com/watch?v=dIik9qnnSQA&list=PL4WWE_tMSca2ud8vp2cdtLsv3yADiJPiR',
                logo: 'http://www.stickpng.com/assets/images/580b57fcd9996e24bc43c548.png',
                icon: 'video_library' },

              { name: 'The Net Ninja',
                todo: false,
                starred: false,
                shared: false,
                link: 'https://www.youtube.com/watch?v=Y1BlT4_c_SU&list=PL4cUxeGkcC9ibZ2TSBaGGNrgh4ZgYE6Cc',
                logo: 'https://yt3.ggpht.com/a-/AJLlDp2oM9rg7DFu7iit71Ndh0yNIEL7F_j0VCRWuQ=s900-mo-c-c0xffffffff-rj-k-no',
                icon: 'video_library' },

              { name: 'Academind',
                todo: false,
                starred: false,
                shared: false,
                link: 'https://www.youtube.com/watch?v=OxOx3WI3Df4&list=PL55RiY5tL51rv_vo3TM3Byu71RYchX_l_',
                logo: 'https://yt3.ggpht.com/a-/AJLlDp2SxGyOXg1EdT5FzOlL3VyDzSUN-567RzdUZg=s900-mo-c-c0xffffffff-rj-k-no',
                icon: 'video_library' },

              { name: 'Traversy Media',
                todo: false,
                starred: false,
                shared: false,
                link: 'https://www.youtube.com/watch?v=UB1O30fR-EE&list=PLillGF-RfqbZTASqIqdvm1R5mLrQq79CU&index=1',
                logo: 'https://yt3.ggpht.com/a-/AJLlDp1dGyGeP0kf7oj9ykar-Mb2I2O8c8KyrEgIbg=s900-mo-c-c0xffffffff-rj-k-no',
                icon: 'video_library' },

              { name: 'Udemy',
                todo: false,
                starred: false,
                shared: false,
                link: 'https://www.udemy.com/courses/search/?q=HTML',
                logo: 'https://cdn.worldvectorlogo.com/logos/udemy-1.svg',
                icon: 'attach_money' },

              { name: 'Treehouse',
                todo: false,
                starred: false,
                shared: false,
                link: 'https://teamtreehouse.com/learn/html?utm_source=google&cid=1352&utm_source=google&campaign=791365357&utm_term=&cid=1352&gclid=Cj0KCQiA2Y_UBRCGARIsALglqQ1V2_6236fYn3EADbp31WZ7M3XfT3rUIHZXnJJilsuq6vvj8-_DFbgaAkJHEALw_wcB&gclsrc=aw.ds',
                logo: 'https://davidwalsh.name/demo/treehouse-logo.png',
                icon: 'attach_money' },

              { name: 'Codecademy',
                todo: false,
                starred: false,
                shared: false,
                link: 'https://www.codecademy.com/learn/learn-html',
                logo: 'https://cdn-images-1.medium.com/max/2000/1*eAkVW2LFAd9pKdL-8hBQ1A.png',
                icon: 'attach_money' },

              { name: 'in Learning',
                todo: false,
                starred: false,
                shared: false,
                link: 'https://www.linkedin.com/learning/topics/html',
                logo: 'https://lh3.googleusercontent.com/WGnfuvo95Yporu_v1zBaDDpt5RLYh_eM1YMMu56pos4V81Ae2djhMfTPtAI50DhLglT4=w300',
                icon: 'attach_money' },

              { name: 'Plurasight',
                todo: false,
                starred: false,
                shared: false,
                link: 'https://www.pluralsight.com/paths/html5',
                logo: 'https://images-na.ssl-images-amazon.com/images/I/51-Hci2bYjL.png',
                icon: 'attach_money' }
            ],
            addition: [
              { name: 'Absolute Beginners',
                todo: false,
                starred: false,
                shared: false,
                link: 'https://www.youtube.com/playlist?list=PLillGF-RfqbZTASqIqdvm1R5mLrQq79CU',
                logo: 'https://yt3.ggpht.com/a-/AJLlDp1dGyGeP0kf7oj9ykar-Mb2I2O8c8KyrEgIbg=s900-mo-c-c0xffffffff-rj-k-no',
                icon: 'video_library' }
            ]
          },
          { name: 'CSS',
            title: 'CSS - Cascading Style Sheets',
            to: 'css',
            logo: 'https://www.shareicon.net/download/2015/09/08/97876_css_512x512.png',
            whatIsVideo: 'https://www.youtube.com/embed/ua3Y-X6-WQc',
            wiki: 'https://en.wikipedia.org/wiki/Cascading_Style_Sheets',
            req: [
              { name: 'HTML', color: 'orange', to: 'leaf-html', icon: 'brands/html5' }
            ],
            next: [
              { name: 'JavaScript', color: 'amber', to: 'leaf-javascript', icon: 'brands/js' },
              { name: 'Sass', color: 'pink lighten-2', to: 'leaf-sass', icon: 'brands/sass' }
            ],
            sources: [
              { name: 'SoloLearn',
                todo: false,
                starred: false,
                shared: false,
                link: 'https://www.sololearn.com/Course/CSS/',
                logo: 'https://lh3.googleusercontent.com/UAylvT-lNL3zfIefMgP9kiUwrhEnJxJiwq8hC0kne0qvSaOGYH8BVlJMYnNWRneb5AI=w300',
                icon: 'devices' },

              { name: 'Khanacademy',
                todo: false,
                starred: false,
                shared: false,
                link: 'https://www.khanacademy.org/computing/computer-programming/html-css/#intro-to-css',
                logo: 'https://cdn.kastatic.org/images/avatars/svg/leaf-green.svg',
                icon: 'devices' },

              { name: 'W3schools',
                todo: false,
                starred: false,
                shared: false,
                link: 'https://www.w3schools.com/css/',
                logo: 'https://store-images.s-microsoft.com/image/apps.30495.13510798887792718.c58f517f-a070-448d-9f42-44c93b19dcae.05c3b4ed-79d8-4d84-be6d-7d3290f1533e?w=180&h=180&q=60',
                icon: 'library_books' },

              { name: 'MDN',
                todo: false,
                starred: false,
                shared: false,
                link: 'https://developer.mozilla.org/en-US/docs/Web/CSS',
                logo: 'https://mdn.mozillademos.org/files/6457/mdn_logo_only_color.png',
                icon: 'library_books' },

              { name: 'The Net Ninja',
                todo: false,
                starred: false,
                shared: false,
                link: 'https://www.youtube.com/watch?v=I9XRrlOOazo&feature=youtu.be&list=PL4cUxeGkcC9gQeDH6xYhmO-db2mhoTSrT',
                logo: 'https://yt3.ggpht.com/a-/AJLlDp2oM9rg7DFu7iit71Ndh0yNIEL7F_j0VCRWuQ=s900-mo-c-c0xffffffff-rj-k-no',
                icon: 'video_library' },

              { name: 'Academind',
                todo: false,
                starred: false,
                shared: false,
                link: 'https://www.youtube.com/watch?v=zwgSc3EntWM&index=5&list=PL55RiY5tL51rv_vo3TM3Byu71RYchX_l_',
                logo: 'https://yt3.ggpht.com/a-/AJLlDp2SxGyOXg1EdT5FzOlL3VyDzSUN-567RzdUZg=s900-mo-c-c0xffffffff-rj-k-no',
                icon: 'video_library' },

              { name: 'Traversy Media',
                todo: false,
                starred: false,
                shared: false,
                link: 'https://www.youtube.com/watch?v=yfoY53QXEnI&index=2&list=PLillGF-RfqbZTASqIqdvm1R5mLrQq79CU',
                logo: 'https://yt3.ggpht.com/a-/AJLlDp1dGyGeP0kf7oj9ykar-Mb2I2O8c8KyrEgIbg=s900-mo-c-c0xffffffff-rj-k-no',
                icon: 'video_library' },

              { name: 'Stefan Mischook',
                todo: false,
                starred: false,
                shared: false,
                link: 'https://youtu.be/CfyafrlGRzE?list=PL4WWE_tMSca2Oh4MEAfzLU6T7_yWmg0qY',
                logo: 'http://www.stickpng.com/assets/images/580b57fcd9996e24bc43c548.png',
                icon: 'video_library' },

              { name: 'Udemy',
                todo: false,
                starred: false,
                shared: false,
                link: 'https://www.udemy.com/courses/search/?q=CSS',
                logo: 'https://cdn.worldvectorlogo.com/logos/udemy-1.svg',
                icon: 'attach_money' },

              { name: 'Codecademy',
                todo: false,
                starred: false,
                shared: false,
                link: 'https://www.codecademy.com/learn/learn-css',
                logo: 'https://cdn-images-1.medium.com/max/2000/1*eAkVW2LFAd9pKdL-8hBQ1A.png',
                icon: 'attach_money' },

              { name: 'Treehouse',
                todo: false,
                starred: false,
                shared: false,
                link: 'https://teamtreehouse.com/learn/css?utm_source=google&cid=1352&utm_source=google&campaign=791365357&utm_term=&cid=1352&gclid=Cj0KCQiA2Y_UBRCGARIsALglqQ1V2_6236fYn3EADbp31WZ7M3XfT3rUIHZXnJJilsuq6vvj8-_DFbgaAkJHEALw_wcB&gclsrc=aw.ds',
                logo: 'https://davidwalsh.name/demo/treehouse-logo.png',
                icon: 'attach_money' },

              { name: 'in Learning',
                todo: false,
                starred: false,
                shared: false,
                link: 'https://www.linkedin.com/learning/topics/css',
                logo: 'https://lh3.googleusercontent.com/WGnfuvo95Yporu_v1zBaDDpt5RLYh_eM1YMMu56pos4V81Ae2djhMfTPtAI50DhLglT4=w300',
                icon: 'attach_money' },

              { name: 'Plurasight',
                todo: false,
                starred: false,
                shared: false,
                link: 'https://www.pluralsight.com/paths/css',
                logo: 'https://images-na.ssl-images-amazon.com/images/I/51-Hci2bYjL.png',
                icon: 'attach_money' }
            ],
            addition: [
              { name: 'Absolute Beginners',
                todo: false,
                starred: false,
                shared: false,
                link: 'https://www.youtube.com/playlist?list=PLillGF-RfqbZTASqIqdvm1R5mLrQq79CU',
                logo: 'https://yt3.ggpht.com/a-/AJLlDp1dGyGeP0kf7oj9ykar-Mb2I2O8c8KyrEgIbg=s900-mo-c-c0xffffffff-rj-k-no',
                icon: 'video_library' },

              { name: 'Transition & Animation',
                todo: false,
                starred: false,
                shared: false,
                link: 'https://www.youtube.com/watch?v=zHUpx90NerM&list=PLillGF-RfqbYeckUaD1z6nviTp31GLTH8&index=33',
                logo: 'https://yt3.ggpht.com/a-/AJLlDp1dGyGeP0kf7oj9ykar-Mb2I2O8c8KyrEgIbg=s900-mo-c-c0xffffffff-rj-k-no',
                icon: 'video_library' },

              { name: 'Flexbox',
                todo: false,
                starred: false,
                shared: false,
                link: 'https://www.youtube.com/watch?v=JJSoEo8JSnc&index=18&list=PLillGF-RfqbYeckUaD1z6nviTp31GLTH8',
                logo: 'https://yt3.ggpht.com/a-/AJLlDp1dGyGeP0kf7oj9ykar-Mb2I2O8c8KyrEgIbg=s900-mo-c-c0xffffffff-rj-k-no',
                icon: 'video_library' },

              { name: 'Understanding CSS',
                todo: false,
                starred: false,
                shared: false,
                link: 'https://www.youtube.com/playlist?list=PL55RiY5tL51q6KKXoA0_CIskaTSJEM1fN',
                logo: 'https://yt3.ggpht.com/a-/AJLlDp2SxGyOXg1EdT5FzOlL3VyDzSUN-567RzdUZg=s900-mo-c-c0xffffffff-rj-k-no',
                icon: 'video_library' },

              { name: 'CSS Positioning',
                todo: false,
                starred: false,
                shared: false,
                link: 'https://www.youtube.com/playlist?list=PL4cUxeGkcC9hudKGi5o5UiWuTAGbxiLTh',
                logo: 'https://yt3.ggpht.com/a-/AJLlDp2oM9rg7DFu7iit71Ndh0yNIEL7F_j0VCRWuQ=s900-mo-c-c0xffffffff-rj-k-no',
                icon: 'video_library' },

              { name: 'CSS Animation',
                todo: false,
                starred: false,
                shared: false,
                link: 'https://www.youtube.com/playlist?list=PL4cUxeGkcC9iGYgmEd2dm3zAKzyCGDtM5',
                logo: 'https://yt3.ggpht.com/a-/AJLlDp2oM9rg7DFu7iit71Ndh0yNIEL7F_j0VCRWuQ=s900-mo-c-c0xffffffff-rj-k-no',
                icon: 'video_library' },

              { name: 'CSS Flexbox',
                todo: false,
                starred: false,
                shared: false,
                link: 'https://www.youtube.com/playlist?list=PL4cUxeGkcC9i3FXJSUfmsNOx8E7u6UuhG',
                logo: 'https://yt3.ggpht.com/a-/AJLlDp2oM9rg7DFu7iit71Ndh0yNIEL7F_j0VCRWuQ=s900-mo-c-c0xffffffff-rj-k-no',
                icon: 'video_library' },

              { name: 'CSS Grid',
                todo: false,
                starred: false,
                shared: false,
                link: 'https://www.youtube.com/playlist?list=PL4cUxeGkcC9itC4TxYMzFCfveyutyPOCY',
                logo: 'https://yt3.ggpht.com/a-/AJLlDp2oM9rg7DFu7iit71Ndh0yNIEL7F_j0VCRWuQ=s900-mo-c-c0xffffffff-rj-k-no',
                icon: 'video_library' },

              { name: 'CSS Variables',
                todo: false,
                starred: false,
                shared: false,
                link: 'https://www.youtube.com/playlist?list=PL4cUxeGkcC9ii5PB2UMyYH7QFZWfGnVgZ',
                logo: 'https://yt3.ggpht.com/a-/AJLlDp2oM9rg7DFu7iit71Ndh0yNIEL7F_j0VCRWuQ=s900-mo-c-c0xffffffff-rj-k-no',
                icon: 'video_library' },

              { name: 'CSS Tips & Tricks',
                todo: false,
                starred: false,
                shared: false,
                link: 'https://www.youtube.com/playlist?list=PL4cUxeGkcC9htzG9o-QzCTsGMbmfuF4kk',
                logo: 'https://yt3.ggpht.com/a-/AJLlDp2oM9rg7DFu7iit71Ndh0yNIEL7F_j0VCRWuQ=s900-mo-c-c0xffffffff-rj-k-no',
                icon: 'video_library' }
            ]
          },
          { name: 'JavaScript',
            title: 'JavaScript - response and interactivity.',
            to: 'javascript',
            logo: 'https://upload.wikimedia.org/wikipedia/commons/6/6a/JavaScript-logo.png',
            whatIsVideo: 'https://www.youtube.com/embed/AgrWeFJWRTg',
            wiki: 'https://en.wikipedia.org/wiki/JavaScript',
            req: [
              { name: 'HTML', color: 'orange', to: 'leaf-html', icon: 'brands/html5' },
              { name: 'CSS', color: 'blue', to: 'leaf-css', icon: 'brands/css3-alt' }
            ],
            next: [
              { name: 'Node.js', color: 'lime', to: 'leaf-nodejs', icon: 'brands/node-js' },
              { name: 'ECMAScript', color: 'amber', to: 'leaf-es6', icon: 'brands/js' }
            ],
            sources: [
              { name: 'SoloLearn',
                todo: false,
                starred: false,
                shared: false,
                link: 'https://www.sololearn.com/Course/JavaScript/',
                logo: 'https://lh3.googleusercontent.com/VMhNdwD6dEukMpEoX9muTVHfdNdR61_isd0VWongciNOUQjQ5Zlm5habSTplvQM3J00=w300',
                icon: 'devices' },

              { name: 'JavaScript.com',
                todo: false,
                starred: false,
                shared: false,
                link: 'https://www.javascript.com',
                logo: 'http://wwwhere.io/img/thumbs/javascriptcom.jpg',
                icon: 'devices' },

              { name: 'Grasshopper',
                todo: false,
                starred: false,
                shared: false,
                link: 'https://grasshopper.codes/',
                logo: 'https://dl1.cbsistatic.com/i/2017/08/30/52f617e6-c43b-43bb-be3c-54e870a966d9/4de78dac6195a1a3d3717c76050550df/imgingest-943582795198143193.png',
                icon: 'smartphone' },

              { name: 'W3schools',
                todo: false,
                starred: false,
                shared: false,
                link: 'https://www.w3schools.com/js/',
                logo: 'https://store-images.s-microsoft.com/image/apps.30495.13510798887792718.c58f517f-a070-448d-9f42-44c93b19dcae.05c3b4ed-79d8-4d84-be6d-7d3290f1533e?w=180&h=180&q=60',
                icon: 'library_books' },

              { name: 'MDN',
                todo: false,
                starred: false,
                shared: false,
                link: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript',
                logo: 'https://mdn.mozillademos.org/files/6457/mdn_logo_only_color.png',
                icon: 'library_books' },

              { name: 'The Net Ninja',
                todo: false,
                starred: false,
                shared: false,
                link: 'https://www.youtube.com/watch?v=I9XRrlOOazo&feature=youtu.be&list=PL4cUxeGkcC9gQeDH6xYhmO-db2mhoTSrT',
                logo: 'https://yt3.ggpht.com/a-/AJLlDp2oM9rg7DFu7iit71Ndh0yNIEL7F_j0VCRWuQ=s900-mo-c-c0xffffffff-rj-k-no',
                icon: 'video_library' },

              { name: 'Academind',
                todo: false,
                starred: false,
                shared: false,
                link: 'https://www.youtube.com/watch?v=o5ffh3KUaTM&index=14&list=PL55RiY5tL51rv_vo3TM3Byu71RYchX_l_',
                logo: 'https://yt3.ggpht.com/a-/AJLlDp2SxGyOXg1EdT5FzOlL3VyDzSUN-567RzdUZg=s900-mo-c-c0xffffffff-rj-k-no',
                icon: 'video_library' },

              { name: 'Traversy Media',
                todo: false,
                starred: false,
                shared: false,
                link: 'https://www.youtube.com/playlist?list=PLillGF-RfqbbnEGy3ROiLWk7JMCuSyQtX',
                logo: 'https://yt3.ggpht.com/a-/AJLlDp1dGyGeP0kf7oj9ykar-Mb2I2O8c8KyrEgIbg=s900-mo-c-c0xffffffff-rj-k-no',
                icon: 'video_library' },

              { name: 'Udemy',
                todo: false,
                starred: false,
                shared: false,
                link: 'https://www.udemy.com/courses/search/?q=Javascript&src=ukw&p=1&courseLabel=8322',
                logo: 'https://cdn.worldvectorlogo.com/logos/udemy-1.svg',
                icon: 'attach_money' },

              { name: 'Codecademy',
                todo: false,
                starred: false,
                shared: false,
                link: 'https://www.codecademy.com/learn/introduction-to-javascript',
                logo: 'https://cdn-images-1.medium.com/max/2000/1*eAkVW2LFAd9pKdL-8hBQ1A.png',
                icon: 'attach_money' },

              { name: 'Treehouse',
                todo: false,
                starred: false,
                shared: false,
                link: 'https://teamtreehouse.com/learn/javascript',
                logo: 'https://davidwalsh.name/demo/treehouse-logo.png',
                icon: 'attach_money' },

              { name: 'in Learning',
                todo: false,
                starred: false,
                shared: false,
                link: 'https://www.linkedin.com/learning/topics/javascript',
                logo: 'https://lh3.googleusercontent.com/WGnfuvo95Yporu_v1zBaDDpt5RLYh_eM1YMMu56pos4V81Ae2djhMfTPtAI50DhLglT4=w300',
                icon: 'attach_money' },

              { name: 'Plurasight',
                todo: false,
                starred: false,
                shared: false,
                link: 'https://www.pluralsight.com/paths/javascript',
                logo: 'https://images-na.ssl-images-amazon.com/images/I/51-Hci2bYjL.png',
                icon: 'attach_money' }
            ],
            addition: [
              { name: 'JS Cardio Session',
                todo: false,
                starred: false,
                shared: false,
                link: 'https://www.youtube.com/watch?v=M2bJBuaOeOQ&list=PLillGF-Rfqbb4ZOnsNCIB-DnLuUrQjS_G',
                logo: 'https://yt3.ggpht.com/a-/AJLlDp1dGyGeP0kf7oj9ykar-Mb2I2O8c8KyrEgIbg=s900-mo-c-c0xffffffff-rj-k-no',
                icon: 'video_library' },

              { name: 'JS DOM Crash Course',
                todo: false,
                starred: false,
                shared: false,
                link: 'https://www.youtube.com/playlist?list=PLillGF-RfqbYE6Ik_EuXA2iZFcE082B3s',
                logo: 'https://yt3.ggpht.com/a-/AJLlDp1dGyGeP0kf7oj9ykar-Mb2I2O8c8KyrEgIbg=s900-mo-c-c0xffffffff-rj-k-no',
                icon: 'video_library' },

              { name: 'JavaScript DOM',
                todo: false,
                starred: false,
                shared: false,
                link: 'https://www.youtube.com/playlist?list=PL4cUxeGkcC9gfoKa5la9dsdCNpuey2s-V',
                logo: 'https://yt3.ggpht.com/a-/AJLlDp2oM9rg7DFu7iit71Ndh0yNIEL7F_j0VCRWuQ=s900-mo-c-c0xffffffff-rj-k-no',
                icon: 'video_library' },

              { name: 'JS Tips & Trics',
                todo: false,
                starred: false,
                shared: false,
                link: 'https://www.youtube.com/playlist?list=PL4cUxeGkcC9gdqHxcUgGhl_cV6xET1_0N',
                logo: 'https://yt3.ggpht.com/a-/AJLlDp2oM9rg7DFu7iit71Ndh0yNIEL7F_j0VCRWuQ=s900-mo-c-c0xffffffff-rj-k-no',
                icon: 'video_library' },

              { name: 'Asynchronous JS',
                todo: false,
                starred: false,
                shared: false,
                link: 'https://www.youtube.com/playlist?list=PL4cUxeGkcC9jAhrjtZ9U93UMIhnCc44MH',
                logo: 'https://yt3.ggpht.com/a-/AJLlDp2oM9rg7DFu7iit71Ndh0yNIEL7F_j0VCRWuQ=s900-mo-c-c0xffffffff-rj-k-no',
                icon: 'video_library' },

              { name: 'Codewars',
                todo: false,
                starred: false,
                shared: false,
                link: 'https://www.codewars.com/?language=javascript',
                logo: 'http://www.softlab.ntua.gr/~nickie/images/logo/codewars.png',
                icon: 'games' }
            ]
          },
          { name: 'CLI',
            title: 'CLI - Command Line Interface',
            to: 'command_line',
            logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/0f/Icons8_flat_command_line.svg/2000px-Icons8_flat_command_line.svg.png',
            wiki: 'https://en.wikipedia.org/wiki/Command-line_interface',
            sources: [
              { name: 'Wikipedia',
                todo: false,
                starred: false,
                shared: false,
                link: 'https://en.wikipedia.org/wiki/Command-line_interface',
                logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/Wikipedia_logo_v3.svg/1024px-Wikipedia_logo_v3.svg.png',
                icon: 'description' },
              { name: 'Conquering the CLI',
                todo: false,
                starred: false,
                shared: false,
                link: 'http://conqueringthecommandline.com/book',
                logo: 'https://softcover.s3.amazonaws.com/8/unix_commands/images/cover-web.png',
                icon: 'description' },
              { name: 'Treehouse',
                todo: false,
                starred: false,
                shared: false,
                link: 'http://blog.teamtreehouse.com/command-line-basics',
                logo: 'https://davidwalsh.name/demo/treehouse-logo.png',
                icon: 'description' },
              { name: 'Ionic Blog',
                todo: false,
                starred: false,
                shared: false,
                link: 'https://blog.ionicframework.com/new-to-the-command-line/',
                logo: 'https://pbs.twimg.com/profile_images/834457277830541312/bYMCvtHD.jpg',
                icon: 'description' },
              { name: 'Codecademy',
                todo: false,
                starred: false,
                shared: false,
                link: 'https://www.codecademy.com/learn/introduction-to-javascript',
                logo: 'https://cdn-images-1.medium.com/max/2000/1*eAkVW2LFAd9pKdL-8hBQ1A.png',
                icon: 'attach_money' },
              { name: 'CLI Power User',
                todo: false,
                starred: false,
                shared: false,
                link: 'https://commandlinepoweruser.com/',
                logo: 'https://wesbos.com/wp-content/uploads/2015/04/ss-2015-04-02-at-2.20.32-PM-650x425.png',
                icon: 'video_library' }
            ],
            addition: [
              { name: 'Codewars',
                todo: false,
                starred: false,
                shared: false,
                link: 'https://www.codewars.com/?language=shell',
                logo: 'http://www.softlab.ntua.gr/~nickie/images/logo/codewars.png',
                icon: 'games' }
            ]
          }
        ]
      },
      { name: 'Text-Editors',
        description: '',
        id: 'editors',
        leafs: [
          {
            name: 'Typing',
            to: 'typing',
            title: 'Learn Touch Typing to work faster.',
            logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/de/Circle-icons-keyboard.svg/1024px-Circle-icons-keyboard.svg.png',
            wiki: 'https://en.wikipedia.org/wiki/Touch_typing',
            sources: [
              {
                name: 'TypingClub',
                todo: false,
                starred: false,
                shared: false,
                link: 'https://www.typingclub.com',
                logo: 'https://www.typingclub.com/m/corp2/img/typingclub_logo.png'
              },
              {
                name: 'TypingCat',
                todo: false,
                starred: false,
                shared: false,
                link: 'http://thetypingcat.com/',
                logo: 'https://i.imgur.com/t51HrPx.gif'
              },
              {
                name: 'Ratatype',
                todo: false,
                starred: false,
                shared: false,
                link: 'https://www.ratatype.com/',
                logo: 'https://pbs.twimg.com/profile_images/3349964038/59dd7f2e10b3e1f098b5c50272f02f4f_400x400.png'
              },
              {
                name: 'Typing.com',
                todo: false,
                starred: false,
                shared: false,
                link: 'https://www.typing.com/',
                logo: 'https://www.typing.com/dist/site/images/svg/badge_teacher.svg'
              },
              {
                name: 'Typing.io',
                todo: false,
                starred: false,
                shared: false,
                link: 'https://typing.io/',
                logo: 'https://pbs.twimg.com/profile_images/2543082656/87sa2w3inlw7tfw826u0_400x400.png'
              },
              {
                name: 'Nitro Type',
                todo: false,
                starred: false,
                shared: false,
                link: 'https://www.nitrotype.com/',
                logo: 'https://pbs.twimg.com/profile_images/907681304426057728/Vt-ZMjCL_400x400.jpg'
              },
              {
                name: 'TypingStudy',
                todo: false,
                starred: false,
                shared: false,
                link: 'http://www.typingstudy.com/',
                logo: 'https://www.shareicon.net/data/2016/07/10/119686_keyboard_512x512.png'
              }
            ]
          },
          { name: 'Atom', logo: 'https://raw.githubusercontent.com/stvhwrd/icons/master/atom/Atom-no_shadows-512.png', href: 'https://atom.io/' },
          { name: 'Brackets', href: 'http://brackets.io/', logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/4c/Brackets_Icon.svg/2000px-Brackets_Icon.svg.png' },
          { name: 'Sublime Text', href: 'https://www.sublimetext.com/', logo: 'https://icon-icons.com/icons2/1381/PNG/512/sublimetext_94866.png' }
        ]
      },
      { name: 'Frontend',
        description: 'Templating, CSS extentions and compiling!',
        id: 'frontend',
        leafs: [
          { name: 'Webpack',
            title: 'Webpack - bundle your files!',
            to: 'webpack',
            logo: 'https://topheman.github.io/webpack-babel-starter/assets/974262647c82057b6078c432841a53ea.png',
            whatIsVideo: 'https://www.youtube.com/embed/5zeXFC_-gMQ',
            wiki: 'https://en.wikipedia.org/wiki/Webpack',
            req: [
              { name: 'HTML', color: 'orange', to: 'leaf-html', icon: 'brands/html5' },
              { name: 'CSS', color: 'blue', to: 'leaf-css', icon: 'brands/css3-alt' },
              { name: 'JavaScript', color: 'amber', to: 'leaf-javascript', icon: 'brands/js' }
            ],
            next: [
              { name: 'ClI', color: 'grey lighten-2', to: 'leaf-command_line', icon: 'terminal' },
              { name: 'Frameworks', color: 'accent', href: 'https://tuts-tree.firebaseapp.com/tree#frameworks', icon: 'cog' }
            ],
            sources: [
              { name: 'Documentation',
                todo: false,
                starred: false,
                shared: false,
                link: 'https://webpack.js.org',
                logo: 'https://topheman.github.io/webpack-babel-starter/assets/974262647c82057b6078c432841a53ea.png',
                icon: 'important_devices' },

              { name: 'The Net Ninja',
                todo: false,
                starred: false,
                shared: false,
                link: 'https://www.youtube.com/playlist?list=PL4cUxeGkcC9iTQ3J5oa6orDIMQKKxl8dC',
                logo: 'https://yt3.ggpht.com/a-/AJLlDp2oM9rg7DFu7iit71Ndh0yNIEL7F_j0VCRWuQ=s900-mo-c-c0xffffffff-rj-k-no',
                icon: 'video_library' },

              { name: 'Traversy Media',
                todo: false,
                starred: false,
                shared: false,
                link: 'https://www.youtube.com/watch?v=lziuNMk_8eQ',
                logo: 'https://yt3.ggpht.com/a-/AJLlDp1dGyGeP0kf7oj9ykar-Mb2I2O8c8KyrEgIbg=s900-mo-c-c0xffffffff-rj-k-no',
                icon: 'video_library' },

              { name: 'Academind',
                todo: false,
                starred: false,
                shared: false,
                link: 'https://www.youtube.com/playlist?list=PL55RiY5tL51rcCnrOrZixuOsZhAHHy6os',
                logo: 'https://yt3.ggpht.com/a-/AJLlDp2SxGyOXg1EdT5FzOlL3VyDzSUN-567RzdUZg=s900-mo-c-c0xffffffff-rj-k-no',
                icon: 'video_library' },

              { name: 'Chris Courses',
                todo: false,
                starred: false,
                shared: false,
                link: 'https://www.youtube.com/playlist?list=PLpPnRKq7eNW2_dy8Re4lyByThMtTAhw5Q',
                logo: 'https://i.ytimg.com/vi/pYA1SpCdEHo/mqdefault.jpg',
                icon: 'video_library' }
            ]
          },
          {
            name: 'Haml',
            badge: 'brands/html5',
            badgecolor: 'orange--text',
            href: 'http://haml.info/',
            logo: 'https://codekitapp.com/images/help/free-haml-icon@2x.png'
          },
          {
            name: 'Slim',
            badge: 'brands/html5',
            badgecolor: 'orange--text',
            href: 'http://slim-lang.com/',
            logo: 'http://ahoylemon.github.io/minnebar2016/img/slim.png'
          },
          {
            name: 'Markdown',
            title: 'Markdown makes writing on the web fast and easy.',
            badge: 'brands/html5',
            badgecolor: 'orange--text',
            href: 'https://www.markdownguide.org/',
            logo: 'https://pbs.twimg.com/profile_images/425948730/DF-Star-Logo.png'
          },
          {
            name: 'Pug',
            badge: 'brands/html5',
            badgecolor: 'orange--text',
            href: 'https://pugjs.org/api/getting-started.html',
            logo: 'https://amandeepmittal.gallerycdn.vsassets.io/extensions/amandeepmittal/pug/1.0.1/1509818475774/Microsoft.VisualStudio.Services.Icons.Default'
          },
          {
            name: 'SASS',
            title: 'SASS - Syntactically Awesome Style Sheets.',
            to: 'sass',
            badge: 'brands/css3-alt',
            badgecolor: 'blue--text',
            wiki: 'https://en.wikipedia.org/wiki/Sass_(stylesheet_language)',
            logo: 'http://sass-lang.com/assets/img/styleguide/seal-color-aef0354c.png',
            whatIsVideo: 'http://files3.lynda.com/secure/courses/536431/VBR_MP4h264_main_SD/536431_01_01_XR30_whatissass.mp4?WRntSYywIn1-InSo9r0DPhT0iDlPiv7ge30qLaO8waITLR687zhL0_3MajwWLdVuSSd-ZPYdFlIVIucyZc2Eoq-xYSz4dtoodMst3SEhMV0fjkwxy3xSWr0tirAGz6XAPZxhxBJNkLwtA44xS4oksIpGmsKgaEWxyMqvpjwt2aBkZoLQ1je7tmmSOBruQnU&c3.ri=3773640875087086116',
            req: [
              { name: 'CSS', color: 'blue', to: 'leaf-css', icon: 'brands/css3-alt' },
              { name: 'Ruby', color: 'red lighten-1', to: 'leaf-ruby' }
            ],
            next: [
              { name: 'CSS-Frameworks', color: 'accent', href: 'https://tuts-tree.firebaseapp.com/tree#libraries' }
            ],
            sources: [
              {
                name: 'Documentation',
                todo: false,
                starred: false,
                shared: false,
                link: 'https://sass-lang.com',
                logo: 'http://sass-lang.com/assets/img/styleguide/seal-color-aef0354c.png',
                icon: 'important_devices'
              },
              {
                name: 'The Net Ninja',
                todo: false,
                starred: false,
                shared: false,
                link: 'https://www.youtube.com/playlist?list=PL4cUxeGkcC9iEwigam3gTjU_7IA3W2WZA',
                logo: 'https://yt3.ggpht.com/a-/AJLlDp2oM9rg7DFu7iit71Ndh0yNIEL7F_j0VCRWuQ=s900-mo-c-c0xffffffff-rj-k-no',
                icon: 'video_library'
              },
              {
                name: 'Level Up Tuts',
                todo: false,
                starred: false,
                shared: false,
                link: 'https://www.youtube.com/playlist?list=PL2CB1F80266E986EA',
                logo: 'https://webdesignledger.com/wp-content/uploads/2015/09/00-level-up-tutorials-logo.jpg',
                icon: 'video_library'
              }
            ]
          },
          {
            name: 'Less',
            logo: 'https://cdn-images-1.medium.com/max/1600/1*O_NwDtfHb1sirw6CAbyoxg.png',
            to: 'less',
            badge: 'brands/css3-alt',
            badgecolor: 'blue--text',
            title: 'It\'s CSS, with just a little more.',
            whatIsVideo: '',
            sources: ['']
          },
          {
            name: 'PostCSS',
            logo: 'http://postcss.org/_/web_modules/Hero/postcss.svg',
            to: 'postcss',
            badge: 'brands/css3-alt',
            badgecolor: 'blue--text',
            title: 'A tool for transforming CSS with JavaScript',
            whatIsVideo: '',
            sources: ['']
          },
          {
            name: 'Stylus',
            logo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQFN9wkn14itSWP4vko1WclfxVkjj1GZ-tFGB0APoh6GddYDlbp',
            to: 'stylus',
            badge: 'brands/css3-alt',
            badgecolor: 'blue--text',
            title: 'EXPRESSIVE, DYNAMIC, ROBUST CSS',
            whatIsVideo: '',
            sources: ['']
          },
          {
            name: 'Babel',
            logo: 'https://cdn-images-1.medium.com/max/800/1*58R0tzuzVXd_7k89Igm9jA.png',
            to: 'babel',
            badge: 'brands/js',
            badgecolor: 'amber--text',
            title: 'Use next generation JavaScript, today.',
            whatIsVideo: '',
            sources: ['']
          },
          {
            name: 'ECMAScript',
            logo: 'https://codereviewvideos.com/blog/wp-content/uploads/2016/04/es6-logo.png',
            to: 'es6',
            badge: 'brands/js',
            badgecolor: 'amber--text',
            title: 'Simply, ECMAScript is a standard. While JavaScript is the most popular implementation of that standard. JavaScript implements ECMAScript and builds on top of it.',
            whatIsVideo: '',
            wiki: 'https://en.wikipedia.org/wiki/ECMAScript',
            req: [
              { name: 'Webpack', color: 'light-blue', to: 'leaf-webpack' },
              { name: 'JavaScript', color: 'amber', to: 'leaf-javascript', icon: 'brands/js' }
            ],
            next: [
              { name: 'TypeScript', color: 'blue', to: 'leaf-ts' }
            ],
            sources: [
              {
                name: 'TutorialsPoint',
                todo: false,
                starred: false,
                shared: false,
                link: 'https://www.tutorialspoint.com/es6/es6_quick_guide.htm',
                logo: 'https://i.vimeocdn.com/portrait/15446031_300x300',
                icon: 'library_books'
              },
              {
                name: 'ES6 Tutorial',
                todo: false,
                starred: false,
                shared: false,
                link: 'http://ccoenraets.github.io/es6-tutorial/',
                logo: 'http://ccoenraets.github.io/es6-tutorial/images/js.png',
                icon: 'library_books'
              },
              {
                name: 'Academind',
                todo: false,
                starred: false,
                shared: false,
                link: 'https://www.youtube.com/watch?v=IEf1KAcK6A8',
                logo: 'https://yt3.ggpht.com/a-/AJLlDp2SxGyOXg1EdT5FzOlL3VyDzSUN-567RzdUZg=s900-mo-c-c0xffffffff-rj-k-no',
                icon: 'video_library'
              }
            ]
          },
          {
            name: 'TypeScript',
            logo: 'https://lh3.googleusercontent.com/-A0wE9U2zDI0/WJY7M98lmEI/AAAAAAAAcQo/-KHSsKPozoQw1USqlSqlaP3GDBhCFyAqwCE0/s1024/ts.png',
            to: 'ts',
            badge: 'brands/js',
            badgecolor: 'amber--text',
            title: 'TypeScript is a typed superset of JavaScript that compiles to plain JavaScript',
            whatIsVideo: '',
            req: [
              { name: 'Webpack', color: 'light-blue', to: 'leaf-webpack' },
              { name: 'ECMAScript', color: 'amber', to: 'leaf-es6', icon: 'brands/js' }
            ],
            sources: [
              {
                name: 'Documentation',
                todo: false,
                starred: false,
                shared: false,
                link: 'https://www.typescriptlang.org/',
                logo: 'https://lh3.googleusercontent.com/-A0wE9U2zDI0/WJY7M98lmEI/AAAAAAAAcQo/-KHSsKPozoQw1USqlSqlaP3GDBhCFyAqwCE0/s1024/ts.png',
                icon: 'important_devices'
              }
            ],
            addition: [
              {
                name: 'Codewars',
                todo: false,
                starred: false,
                shared: false,
                link: 'https://www.codewars.com/?language=typescript',
                logo: 'http://www.softlab.ntua.gr/~nickie/images/logo/codewars.png',
                icon: 'games'
              }
            ]
          },
          {
            name: 'CofeeScript',
            logo: 'https://cdn.worldvectorlogo.com/logos/coffeescript.svg',
            to: 'cofeescript',
            badge: 'brands/js',
            badgecolor: 'amber--text',
            title: 'CoffeeScript is a little language that compiles into JavaScript.',
            whatIsVideo: '',
            sources: ['']
          },
          {
            name: 'LiveScript',
            logo: 'https://avatars3.githubusercontent.com/u/25471216?s=200&v=4',
            to: 'cofeescript',
            badge: 'brands/js',
            badgecolor: 'amber--text',
            title: 'LiveScript is a language which compiles to JavaScript.',
            whatIsVideo: '',
            sources: ['']
          }
        ]
      },
      { name: 'Backend',
        description: 'Control and manage data on your page with scripting languages and their frameworks',
        id: 'backend',
        leafs: [
          { name: 'Node.js',
            to: 'nodejs',
            title: 'Node.js - javascript for the server side',
            logo: 'http://blog.iampuneet.in/wp-content/uploads/2017/06/nodejs_logo.png',
            whatIsVideo: 'https://www.youtube.com/embed/lNiGH21gMiw?list=PL55RiY5tL51qXR-9ypW3HyzyWKpuuglKg',
            req: [
              { name: 'HTML', color: 'orange', to: 'leaf-html', icon: 'brands/html5' },
              { name: 'CSS', color: 'blue', to: 'leaf-css', icon: 'brands/css3-alt' },
              { name: 'JavaScript', color: 'amber', to: 'leaf-javascript', icon: 'brands/js' }
            ],
            next: [
              { name: 'Expressjs', color: 'grey lighten-3', href: 'http://expressjs.com/' },
              { name: 'JS Frameworks', color: 'accent', href: 'https://tuts-tree.firebaseapp.com/tree#frameworks', icon: 'cog' }
            ],
            sources: [
              {
                name: 'W3schools',
                todo: false,
                starred: false,
                shared: false,
                link: 'https://www.w3schools.com/nodejs/',
                logo: 'https://store-images.s-microsoft.com/image/apps.30495.13510798887792718.c58f517f-a070-448d-9f42-44c93b19dcae.05c3b4ed-79d8-4d84-be6d-7d3290f1533e?w=180&h=180&q=60',
                icon: 'library_books'
              }
            ]
          },
          { name: 'PHP', to: 'php', logo: 'https://sipexa.com/wp-content/uploads/php-logo.png' },
          { name: 'Ruby', to: 'ruby', logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/73/Ruby_logo.svg/2000px-Ruby_logo.svg.png' },
          { name: 'Python', to: 'python', logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c3/Python-logo-notext.svg/2000px-Python-logo-notext.svg.png' },
          { name: 'Expressjs', href: 'http://expressjs.com/', logo: 'https://camo.githubusercontent.com/647e291a5fd52d50e01deb82f9392c462df148a6/687474703a2f2f617070732e6f63746f636f6e73756c74696e672e636f6d2f696d616765732f6578707265737349636f6e2e706e67' },
          { name: 'Ruby On Rails', href: 'https://rubyonrails.org/', logo: 'https://upload.wikimedia.org/wikipedia/commons/1/16/Ruby_on_Rails-logo.png' },
          { name: 'Django', href: 'https://www.djangoproject.com/', logo: 'http://www.unixstickers.com/image/data/buttons/png/django.png' },
          { name: 'Flask', href: 'http://flask.pocoo.org/', logo: 'http://www.unixstickers.com/image/data/stickers/flask/Flask-logo.sh.png' },
          { name: 'Symfony', href: 'https://symfony.com/', logo: 'https://symfony.com/images/v5/pictos/home-main-illu.svg' },
          { name: 'Laravel', href: 'https://laravel.com/', logo: 'http://www.stickpng.com/assets/images/58480e35cef1014c0b5e4920.png' },
          { name: 'MongoDB', href: 'https://www.mongodb.com/', logo: 'http://www.unixstickers.com/image/cache/data/stickers/mongo/mongo.sh-600x600.png' }
        ]
      },
      { name: 'JS-Frameworks',
        description: 'Make JavaScript running faster with JavaScript Frameworks!',
        id: 'frameworks',
        leafs: [
          { name: 'Vue',
            to: 'vue',
            title: 'Vue.js - progressive framework for building user interfaces.',
            logo: 'http://blog.evanyou.me/images/logo.png',
            whatIsVideo: 'https://www.youtube.com/embed/3I8EFGIORRc',
            wiki: 'https://en.wikipedia.org/wiki/Vue.js',
            req: [
              { name: 'HTML', color: 'orange', to: 'leaf-html', icon: 'brands/html5' },
              { name: 'CSS', color: 'blue', to: 'leaf-css', icon: 'brands/css3-alt' },
              { name: 'JavaScript', color: 'amber', to: 'leaf-javascript', icon: 'brands/js' },
              { name: 'Node.js', color: 'lime', to: 'leaf-nodejs', icon: 'brands/node-js' }
            ],
            next: [
              { name: 'Nuxt.js', color: 'teal', to: 'leaf-nuxt' },
              { name: 'CSS-Frameworks', color: 'accent', href: 'https://tuts-tree.firebaseapp.com/tree#libraries', icon: 'brands/vuejs' }
            ],
            sources: [
              { name: 'Documentation',
                todo: false,
                starred: false,
                shared: false,
                link: 'https://vuejs.org',
                logo: 'https://vuejs.org/images/logo.png',
                icon: 'important_devices' },
              { name: 'Vue-School',
                todo: false,
                starred: false,
                shared: false,
                link: 'https://vueschool.io/',
                logo: 'https://vueschool.io/articles/wp-content/uploads/2017/12/logo-400x400.png',
                icon: 'devices' },
              { name: 'Vue-Mastery',
                todo: false,
                starred: false,
                shared: false,
                link: 'https://www.vuemastery.com/',
                logo: 'https://vuejobs.com/storage/avatars/5UKUjwwZl95Gtf6LROV26hDa8PV5nNfaEv2bf3eG.png',
                icon: 'devices' },
              { name: 'Laracasts',
                todo: false,
                starred: false,
                shared: false,
                link: 'https://laracasts.com/series/learn-vue-2-step-by-step',
                logo: 'https://media.simplecast.com/episode/image/50258/1477086834-artwork.jpg',
                icon: 'devices' },
              { name: 'Academind',
                todo: false,
                starred: false,
                shared: false,
                link: 'https://www.youtube.com/playlist?list=PL55RiY5tL51p-YU-Uw90qQH419BM4Iz07',
                logo: 'https://yt3.ggpht.com/a-/AJLlDp2SxGyOXg1EdT5FzOlL3VyDzSUN-567RzdUZg=s900-mo-c-c0xffffffff-rj-k-no',
                icon: 'video_library' },
              { name: 'The Net Ninja',
                todo: false,
                starred: false,
                shared: false,
                link: 'https://www.youtube.com/playlist?list=PL4cUxeGkcC9gQcYgjhBoeQH7wiAyZNrYa',
                logo: 'https://yt3.ggpht.com/a-/AJLlDp2oM9rg7DFu7iit71Ndh0yNIEL7F_j0VCRWuQ=s900-mo-c-c0xffffffff-rj-k-no',
                icon: 'video_library' },
              { name: 'Udemy',
                todo: false,
                starred: false,
                shared: false,
                link: 'https://www.udemy.com/courses/search/?q=vue&src=ukw',
                logo: 'https://cdn.worldvectorlogo.com/logos/udemy-1.svg',
                icon: 'attach_money' }
            ],
            addition: [
              { name: 'Vue-Devtools',
                todo: false,
                starred: false,
                shared: false,
                link: 'https://chrome.google.com/webstore/detail/vuejs-devtools/nhdogjmejiglipccpnnnanhbledajbpd?hl=en',
                logo: 'https://vuejs.org/images/logo.png',
                icon: 'extension' },
              { name: 'Vue-Performance',
                todo: false,
                starred: false,
                shared: false,
                link: 'https://chrome.google.com/webstore/detail/vue-performance-devtool/koljilikekcjfeecjefimopfffhkjbne?hl=en',
                logo: 'https://raw.githubusercontent.com/vue-perf-devtool/vue-perf-devtool/master/media/logo.png',
                icon: 'extension' }
            ]
          },
          { name: 'Angular',
            to: 'angular',
            title: 'Angular - makes it easy to build applications with the web.',
            logo: 'https://cdn.worldvectorlogo.com/logos/angular-icon-1.svg',
            whatIsVideo: 'https://www.youtube.com/embed/b9gnX62ZMTU',
            sources: ['']
          },
          { name: 'React',
            to: 'react',
            title: 'React - A JavaScript library for building user interfaces.',
            logo: 'https://sandstorm.de/_Resources/Persistent/3285416e8503b2c8354c321bcd690cf550b8b2d3/React-Logo.svg',
            whatIsVideo: 'https://www.youtube.com/embed/OUSz_24ljgY',
            sources: ['']
          },
          { name: 'Ember',
            to: 'ember',
            title: 'Ember - for creating ambitious web applications.',
            logo: 'http://emberjs.com/images/tomster-sm.png',
            whatIsVideo: 'https://files3.lynda.com/secure/courses/178116/VBR_MP4h264_main_SD/178116_01_01_XR15_whatis.mp4?HqLkriiSiQYNTpjq6quDEUnuw88KP9x-wuiHWMZsXbEQHyHLJwVntUGFsromh6P2O-03G2Ek8oxPSmSgG5Rx_2Xb5XI1UrmKQcC32lLIwdZTdu4YOP9oIRRRtPrQ-VeApym7azoloxcNMj0AF0K2gr9lPn08ftlwgnDbin1iBkcimLVFhw',
            sources: ['']
          },
          { name: 'Hugo',
            logo: 'https://gutl.jovenclub.cu/wp-content/uploads/2016/02/apple-touch-icon.png',
            href: 'https://gohugo.io/'
          },
          { name: 'Aurelia',
            logo: 'https://user-images.githubusercontent.com/4623561/34425378-352f12c4-ebf9-11e7-86e2-8f20b8693bf5.png',
            href: 'https://aurelia.io/'
          },
          { name: 'Meteor',
            logo: 'http://www.stickpng.com/assets/images/58480fcfcef1014c0b5e4942.png',
            href: 'https://www.meteor.com/'
          },
          { name: 'JQuery',
            logo: 'http://ethiopiarabb.com/assets/images/icon-jquery.png',
            to: 'jquery',
            title: 'jQuery - a lightweight javascript library',
            whatIsVideo: 'https://www.youtube.com/embed/U4UZVbQ8md0',
            sources: [
              { name: 'JQuery',
                todo: false,
                starred: false,
                shared: false,
                link: 'https://jquery.com/',
                logo: 'https://js.foundation/wp-content/uploads/sites/33/2017/02/jquery.png',
                icon: 'description' },

              { name: 'SoloLearn',
                todo: false,
                starred: false,
                shared: false,
                link: 'https://www.sololearn.com/Course/jQuery/',
                logo: 'https://lh3.googleusercontent.com/ETvE8qpSRnKBb7QMEkctSfC8r3CjGmMy00PtV3qq0YLUVl1PtKjTVpGXCP8cO9xnGw=w300',
                icon: 'devices' },

              { name: 'in Learning',
                todo: false,
                starred: false,
                shared: false,
                link: 'https://www.linkedin.com/learning/topics/jquery',
                logo: 'https://lh3.googleusercontent.com/WGnfuvo95Yporu_v1zBaDDpt5RLYh_eM1YMMu56pos4V81Ae2djhMfTPtAI50DhLglT4=w300',
                icon: 'attach_money' },

              { name: 'Plurasight',
                todo: false,
                starred: false,
                shared: false,
                link: 'https://www.pluralsight.com/paths/jquery',
                logo: 'https://images-na.ssl-images-amazon.com/images/I/51-Hci2bYjL.png',
                icon: 'attach_money' }
            ]
          }
        ]
      },
      { name: 'CSS-Frameworks',
        description: 'Add awesome styles and components with CSS Frameworks.',
        id: 'libraries',
        leafs: [
          { name: 'Bootstrap', href: 'https://getbootstrap.com/', logo: 'https://sdtimes.com/wp-content/uploads/2018/01/bootstrap-stack-490x412.png' },
          { name: 'Vue-Bootstrap', href: 'https://bootstrap-vue.js.org/', logo: 'https://bootstrap-vue.js.org/_nuxt/img/icon.f0a8c9e.png', badge: 'brands/vuejs', badgecolor: 'teal--text' },
          { name: 'Rct-Bootstrap', href: 'https://react-bootstrap.github.io/', logo: 'https://qph.ec.quoracdn.net/main-qimg-a1cba7ee0601b2ea0bd44d7900e23cc8', badge: 'brands/react', badgecolor: 'light-blue--text' },
          { name: 'NG-Bootstrap', href: 'https://ng-bootstrap.github.io/#/home', logo: 'https://ng-bootstrap.github.io/img/logo.svg', badge: 'brands/angular', badgecolor: 'pink--text' },
          { name: 'Bootstrap UI', href: 'https://angular-ui.github.io/bootstrap/', logo: 'https://anantanandgupta.github.io/nuget-modules/images/ui-logo.png', badge: 'brands/angular', badgecolor: 'pink--text' },

          { name: 'Semantic', href: 'https://semantic-ui.com/', logo: 'https://cdn.worldvectorlogo.com/logos/semantic-ui.svg' },
          { name: 'Vue-Semantic', href: 'https://semantic-ui-vue.github.io/#/', logo: 'https://semantic-ui-vue.github.io/static/images/logo.png', badge: 'brands/vuejs', badgecolor: 'teal--text' },
          { name: 'Rct-Semantic', href: 'https://react.semantic-ui.com/introduction', logo: 'https://react.semantic-ui.com/logo.png', badge: 'brands/react', badgecolor: 'light-blue--text' },
          { name: 'NG-Semantic', href: 'https://ng-semantic.herokuapp.com/#/', logo: 'https://raw.githubusercontent.com/edcarroll/ng2-semantic-ui/master/demo/src/assets/logo.png', badge: 'brands/angular', badgecolor: 'pink--text' },

          { name: 'Material Lite', href: 'https://getmdl.io/', logo: 'https://www.3pillarglobal.com/wp-content/uploads/2015/10/mdl_logo_320x260-300x260.png' },
          { name: 'Vue-Material', href: 'https://vuematerial.io/', logo: 'https://camo.githubusercontent.com/55e8a928e9fca0eeb4e7cb7836cb60dc05703c65/68747470733a2f2f7675656d6174657269616c2e696f2f6173736574732f6c6f676f2d636f6c6f722e706e67', badge: 'brands/vuejs', badgecolor: 'teal--text' },
          { name: 'Material UI', href: 'https://www.material-ui.com/#/', logo: 'https://material-ui-next.com/static/brand.png', badge: 'brands/react', badgecolor: 'light-blue--text' },
          { name: 'NG-Material', href: 'https://material.angular.io/', logo: 'http://angularexpo.com/content/images/2016/11/icon_192.png', badge: 'brands/angular', badgecolor: 'pink--text' },
          { name: 'Teradata', href: 'https://teradata.github.io/covalent/#/', logo: 'https://cdn-images-1.medium.com/max/1600/1*ZPOa0Nn_fk0XtNTmeESQzA.png', badge: 'brands/angular', badgecolor: 'pink--text' },

          { name: 'Materialize', href: 'http://materializecss.com/', logo: 'http://materializecss.com/images/favicon/apple-touch-icon-152x152.png' },
          { name: 'Vuetify', href: 'https://vuetifyjs.com/en/', logo: 'https://next.vuetifyjs.com/static/apple-touch-icon-180x180.png', badge: 'brands/vuejs', badgecolor: 'teal--text' },
          { name: 'Rct-Material...', href: 'https://react-materialize.github.io/#/', logo: 'https://avatars1.githubusercontent.com/u/10089934?s=280&v=4', badge: 'brands/react', badgecolor: 'light-blue--text' },

          { name: 'Bulma', href: 'https://bulma.io/', logo: 'https://jgthms.com/web-design-in-4-minutes/bulma.png' },
          { name: 'Buefy', href: 'https://buefy.github.io/#/', logo: 'https://avatars3.githubusercontent.com/u/26799900?s=400&v=4', badge: 'brands/vuejs', badgecolor: 'teal--text' },

          { name: 'UIkit', href: 'https://getuikit.com/', logo: 'https://pbs.twimg.com/profile_images/818852933483823104/YYr9qgV8_400x400.jpg' },
          { name: 'Vuikit', href: 'https://vuikit.js.org/', logo: 'https://avatars2.githubusercontent.com/u/19988804?s=400&v=4', badge: 'brands/vuejs', badgecolor: 'teal--text' },

          { name: 'Foundation', href: 'https://foundation.zurb.com/', logo: 'https://foundation.zurb.com/assets/img/learn/features/svgs/code-reduction-01.svg' },
          { name: 'Rct-Foundati...', href: 'https://react.foundation/', logo: 'https://cdn.worldvectorlogo.com/logos/react.svg', badge: 'brands/react', badgecolor: 'light-blue--text' },

          { name: 'Pure CSS', href: 'https://purecss.io/', logo: 'http://www.developersfeed.com/wp-content/uploads/2016/02/pure-css-logo-e1455594006843.png' },
          { name: 'Element', href: 'http://element.eleme.io/1.4/#/en-US', logo: 'http://element.eleme.io/1.4/static/banner-bg.75437e1.svg' },
          { name: 'Vuesax', href: 'https://lusaxweb.github.io/vuesax/#/en/home', logo: 'https://madewithvuejs.com/uploads/07/11/vuesax.png', badge: 'brands/vuejs', badgecolor: 'teal--text' },

          { name: 'PrimeNG', href: 'https://www.primefaces.org/primeng/#/', logo: 'https://www.primefaces.org/presskit/primeng-logo.png', badge: 'brands/angular', badgecolor: 'pink--text' },
          { name: 'Clarity', href: 'https://vmware.github.io/clarity/', logo: 'https://habrastorage.org/webt/59/f0/51/59f05155beffd369502984.png', badge: 'brands/angular', badgecolor: 'pink--text' }
        ]
      },
      { name: 'SSR',
        description: 'Make your website load faster with Server Side Rendering',
        id: 'ssr',
        leafs: [
          {
            name: 'Nuxt.js',
            to: 'nuxt',
            title: 'Nuxt.js is a framework for creating Universal Vue.js Applications.Its main scope is UI rendering while abstracting away the client/server distribution.Our goal is to create a framework flexible enough that you can use it as a main project base or in addition to your current project based on Node.js.Nuxt.js presets all the configuration needed to make your development of a Vue.js Application Server Rendered more enjoyable.In addition, we also provide another deployment option called: nuxt generate. It will build a Static Generated Vue.js Application. We believe that option could be the next big step in the development of Web Applications with microservices.As a framework, Nuxt.js comes with a lot of features to help you in your development between the client side and the server side such as Asynchronous Data, Middleware, Layouts, etc.',
            logo: 'https://pbs.twimg.com/profile_images/805469971664998400/UAIojlzx_400x400.jpg',
            badge: 'brands/vuejs',
            badgecolor: 'teal--text',
            req: [
              { name: 'Vue', color: 'teal', to: 'leaf-vue', icon: 'brands/vuejs' }
            ],
            sources: [
              { name: 'Documentation',
                todo: false,
                starred: false,
                shared: false,
                link: 'https://nuxtjs.org/',
                logo: 'https://pbs.twimg.com/profile_images/805469971664998400/UAIojlzx_400x400.jpg',
                icon: 'important_devices' }
            ]
          },
          {
            name: 'Next.js',
            to: 'next',
            logo: 'https://d2eip9sf3oo6c2.cloudfront.net/tags/images/000/001/074/full/nextjs.png',
            badge: 'brands/react',
            badgecolor: 'light-blue--text',
            req: [
              { name: 'React', color: 'light-blue', to: 'leaf-react', icon: 'brands/react' }
            ],
            sources: [
              { name: 'Documentation',
                todo: false,
                starred: false,
                shared: false,
                link: 'https://nextjs.org/',
                logo: 'https://d2eip9sf3oo6c2.cloudfront.net/tags/images/000/001/074/full/nextjs.png',
                icon: 'important_devices' }
            ]
          }
        ]
      },
      { name: 'Graphics',
        description: 'That\'s about drawing and animating things',
        id: 'graphics',
        leafs: [
          {
            name: 'SVG',
            logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/4f/SVG_Logo.svg/2000px-SVG_Logo.svg.png',
            to: 'svg',
            sources: [
              { name: 'W3schools',
                todo: false,
                starred: false,
                shared: false,
                link: 'https://www.w3schools.com/graphics/svg_intro.asp',
                logo: 'https://store-images.s-microsoft.com/image/apps.30495.13510798887792718.c58f517f-a070-448d-9f42-44c93b19dcae.05c3b4ed-79d8-4d84-be6d-7d3290f1533e?w=180&h=180&q=60',
                icon: 'library_books'
              }
            ]
          },
          {
            name: 'HTML Canvas',
            logo: 'https://img08.deviantart.net/aed0/i/2012/172/5/0/html5_canvas_logo_by_netgoblin154-d54alet.png',
            to: 'canvas',
            req: [
              { name: 'HTML', color: 'orange', to: 'leaf-html', icon: 'brands/html5' }
            ],
            sources: [
              { name: 'W3schools',
                todo: false,
                starred: false,
                shared: false,
                link: 'https://www.w3schools.com/graphics/canvas_intro.asp',
                logo: 'https://store-images.s-microsoft.com/image/apps.30495.13510798887792718.c58f517f-a070-448d-9f42-44c93b19dcae.05c3b4ed-79d8-4d84-be6d-7d3290f1533e?w=180&h=180&q=60',
                icon: 'library_books'
              },
              { name: 'Chris Courses',
                todo: false,
                starred: false,
                shared: false,
                link: 'https://www.youtube.com/playlist?list=PLpPnRKq7eNW3We9VdCfx9fprhqXHwTPXL',
                logo: 'https://i.ytimg.com/vi/pYA1SpCdEHo/mqdefault.jpg',
                icon: 'video_library'
              }
            ]
          },
          { name: 'WebGL', href: 'https://developer.mozilla.org/en-US/docs/Web/API/WebGL_API', logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/25/WebGL_Logo.svg/2000px-WebGL_Logo.svg.png' },
          { name: 'Three.js', href: 'https://threejs.org/', logo: 'https://kenoleon.github.io/Front-End-Web-Dev-UI-UX/assets/images/threejsLogo.jpg' },
          { name: 'Vivus.js', href: 'http://maxwellito.github.io/vivus/', logo: 'https://taxi-luxembourg.lu/wp-content/uploads/2016/04/dummy-post-square-1.jpg' },
          { name: 'Bonsai.js', href: 'http://bonsaijs.org/', logo: 'https://taxi-luxembourg.lu/wp-content/uploads/2016/04/dummy-post-square-1.jpg' },
          { name: 'Velocity.js', href: 'http://velocityjs.org/', logo: 'https://taxi-luxembourg.lu/wp-content/uploads/2016/04/dummy-post-square-1.jpg' },
          { name: 'Raphaël.js', href: 'http://dmitrybaranovskiy.github.io/raphael/', logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d7/Rapha%C3%ABl_logo.svg/2000px-Rapha%C3%ABl_logo.svg.png' },
          { name: 'SnapSVG', href: 'http://snapsvg.io/', logo: 'http://www.stickpng.com/assets/images/58482e09cef1014c0b5e4a65.png' },
          { name: 'Lazy Line Painter', href: 'http://lazylinepainter.info/', logo: 'https://www.jqueryscript.net/images/SVG-Path-Animation-Plugin-with-jQuery-Lazy-Line-Painter.jpg' },
          { name: 'SVG.js', href: 'http://svgjs.com/', logo: 'http://svgjs.com/assets/images/logo-svg-js-01d.png' },
          { name: 'Walkway.js', href: 'https://www.connoratherton.com/walkway', logo: 'http://maxcdn.webappers.com/img/2014/11/walkway-js.jpg' },
          { name: 'Popmotion', href: 'https://popmotion.io/', logo: 'https://pbs.twimg.com/profile_images/932879315343167488/m4w3StTy_400x400.jpg' },
          { name: 'Bounce.js', href: 'http://bouncejs.com/', logo: 'https://taxi-luxembourg.lu/wp-content/uploads/2016/04/dummy-post-square-1.jpg' },
          { name: 'Typed.js', href: 'https://mattboldt.com/demos/typed-js/', logo: 'https://taxi-luxembourg.lu/wp-content/uploads/2016/04/dummy-post-square-1.jpg' },
          { name: 'GSAP', href: 'https://greensock.com/', logo: 'https://d2eip9sf3oo6c2.cloudfront.net/tags/images/000/001/088/thumb/tweenmax.png' },
          { name: 'Tilt.js', href: 'https://gijsroge.github.io/tilt.js/', logo: 'https://taxi-luxembourg.lu/wp-content/uploads/2016/04/dummy-post-square-1.jpg' },
          { name: 'Sketch.js', href: 'http://soulwire.github.io/sketch.js/', logo: 'https://taxi-luxembourg.lu/wp-content/uploads/2016/04/dummy-post-square-1.jpg' },
          { name: 'Animejs', href: 'http://animejs.com', logo: 'https://codepen.io/juliangarnier/pen/oZNYXB/image/large.png' },
          { name: 'Animate.css', href: 'https://daneden.github.io/animate.css/', logo: 'http://worthyofnote.co.uk/wp-content/uploads/2013/07/animate-css.jpg' }
        ]
      },
      { name: 'Hosting',
        description: 'Put your project on the web',
        id: 'hosting',
        leafs: [
          { name: 'Amazon S3', to: '/s3', logo: 'https://cdn.worldvectorlogo.com/logos/aws-s3.svg' },
          { name: 'Amazon EC2', to: '/ec2', logo: 'https://cdn.worldvectorlogo.com/logos/aws-ec2.svg' },
          { name: 'Netlify', href: 'https://www.netlify.com/', logo: 'https://www.netlify.com/img/press/logos/logomark.png' },
          { name: 'Bluehost', href: 'https://www.bluehost.com/', logo: 'https://www.bluehost.com/blog/wp-content/uploads/2017/07/logo5.png' },
          { name: 'Firebase', todo: '/firease', logo: 'https://firebase.google.com/_static/images/firebase/touchicon-180.png' }
        ]
      },
      { name: 'Apps',
        description: 'Build cross-platform native apps using web development skill',
        id: 'apps',
        leafs: [
          { name: 'Flutter', href: 'https://flutter.io/', logo: 'https://cdn-images-1.medium.com/max/1200/1*5-aoK8IBmXve5whBQM90GA.png' },
          { name: 'Ionic', href: 'https://ionicframework.com/', logo: 'https://lh3.googleusercontent.com/s4KD6rLbGKZz-q9YzfVt_FgSk_q2yt-Jp6Al-KY14hAaVW2IFX_QOj56iC8lJoamECs=w300' },
          { name: 'Electron', href: 'https://electronjs.org/', logo: 'https://pbs.twimg.com/profile_images/730268134460903424/8WOgriUU_400x400.jpg' },
          { name: 'NativeScript', href: 'https://www.nativescript.org/', logo: 'https://d2odgkulk9w7if.cloudfront.net/images/default-source/default-album/nativescript.png?sfvrsn=69909fe_0' },
          { name: 'NS-Vue', href: 'https://nativescript-vue.org/', logo: 'https://avatars1.githubusercontent.com/u/32681046?s=280&v=4', badge: 'brands/vuejs', badgecolor: 'teal--text' },
          { name: 'React Native', href: 'https://facebook.github.io/react-native/', logo: 'https://cdn-images-1.medium.com/max/1600/1*XXF26vmDRr6vRY84d1BCKA.png', badge: 'brands/react', badgecolor: 'light-blue--text' },
          { name: 'Fuse', href: 'https://www.fusetools.com/', logo: 'https://avatars1.githubusercontent.com/u/10243317?s=280&v=4' },
          { name: 'Onsen UI', href: 'https://onsen.io/', logo: 'https://s3.amazonaws.com/media-p.slid.es/uploads/344767/images/2769652/g7.png' },
          { name: 'Framework7', href: 'https://framework7.io/', logo: 'https://discoversdkcdn.azureedge.net/runtimecontent/companyfiles/6680/2706/thumbnail.png?v131157447489100864' },
          { name: 'Appcelerator', href: 'https://www.appcelerator.com/', logo: 'https://pbs.twimg.com/profile_images/865600112868769794/TECPQ7Rb_400x400.jpg' },
          { name: 'Weex', href: 'https://weex.incubator.apache.org/', logo: 'https://cdn-images-1.medium.com/max/358/1*JGQP6WjsRwiiLTNPiCAH5A.png' },
          { name: 'Quasar', href: 'https://quasar-framework.org/', logo: 'https://avatars3.githubusercontent.com/u/23064371?v=4' },
          { name: 'Cocoon', href: 'https://cocoon.io/', logo: 'https://pbs.twimg.com/profile_images/590908349471916033/GGl0hWfy_400x400.png' },
          { name: 'Monaca', href: 'https://monaca.io', logo: 'https://img.crx4chrome.com/4e/79/df/igimoohpkianbofjknpbnfehmkecbegl-logo.png' },
          { name: 'Cordova', href: 'https://cordova.apache.org/', logo: 'https://cordova.apache.org/static/img/cordova_bot.png' },
          { name: 'RubyMotion', href: 'http://www.rubymotion.com/', logo: 'http://www.rubymotion.com/img/rubymotion-logo.png' },
          { name: 'PhoneGap', href: 'https://phonegap.com/', logo: 'https://cdn.worldvectorlogo.com/logos/phonegap.svg' }
        ]
      },
      { name: 'Tools',
        description: 'Definitely check theese out',
        id: 'tools',
        leafs: [
          {
            name: 'GitHub',
            to: 'github',
            logo: 'https://assets-cdn.github.com/images/modules/logos_page/Octocat.png',
            sources: [
              { name: 'Documentation',
                todo: false,
                starred: false,
                shared: false,
                link: 'https://guides.github.com/',
                logo: 'https://image.flaticon.com/icons/svg/25/25231.svg',
                icon: 'important_devices'
              },
              { name: 'The Net Ninja',
                todo: false,
                starred: false,
                shared: false,
                link: 'https://www.youtube.com/playlist?list=PL4cUxeGkcC9goXbgTDQ0n_4TBzOO0ocPR;',
                logo: 'https://yt3.ggpht.com/a-/AJLlDp2oM9rg7DFu7iit71Ndh0yNIEL7F_j0VCRWuQ=s900-mo-c-c0xffffffff-rj-k-no',
                icon: 'important_devices'
              }
            ]
          },
          { name: 'Firebase', to: 'firease', logo: 'https://firebase.google.com/_static/images/firebase/touchicon-180.png' },
          { name: 'NPM', href: 'https://www.npmjs.com/', logo: 'https://d2eip9sf3oo6c2.cloudfront.net/tags/images/000/000/188/full/npmlogo.png' },
          { name: 'Stenciljs', href: 'https://stenciljs.com/', logo: 'https://pbs.twimg.com/profile_images/895677818998185985/mWrrADXf_400x400.jpg' },
          { name: 'Material Design', href: 'https://material.io/', logo: 'https://cdn.dribbble.com/users/75794/screenshots/3051672/mb_social_1.gif' },
          { name: 'CodePen', href: 'https://codepen.io/', logo: 'http://blog.codepen.io/wp-content/uploads/2012/06/Button-Fill-White-Large.png' },
          { name: 'Tryit Editor', href: 'https://www.w3schools.com/html/tryit.asp?filename=tryhtml_basic', logo: 'http://www.karlsjohnson.com/link/resources/images/w3school.png' },
          { name: 'jsFiddle', href: 'https://jsfiddle.net/', logo: 'https://cdn.iconscout.com/public/images/icon/free/png-512/jsfiddle-logo-cloud-38db5faa6163991e-512x512.png' },
          { name: 'jsBin', href: 'https://jsbin.com/', logo: 'https://static.jsbin.com/images/logo.png' },
          { name: 'Sketch', href: 'https://www.sketchapp.com/', logo: 'https://www.sketchapp.com/images/press/sketch-press-kit/app-icons/sketch-mac-icon@2x.png' },
          { name: 'Loaders.css', href: 'https://connoratherton.com/loaders', logo: 'https://i.pinimg.com/originals/da/96/c9/da96c94b507e4c508dd6e901455cfe68.jpg' },
          { name: 'Particles.js', href: 'https://vincentgarreau.com/particles.js/', logo: 'https://i.pinimg.com/originals/84/30/d2/8430d2bfcdfe8d00a9eaacb62fb272df.png' },
          { name: 'Vue-Particles', href: 'http://vue-particles.netlify.com/', logo: 'https://madewithvuejs.com/uploads/09/15/9e63f3fe-2e67-11e7-9074-7bd9458ed691.png' },
          { name: 'Vue-Flat-Su...', href: 'https://grzhan.github.io/vue-flat-surface-shader/', logo: 'https://camo.githubusercontent.com/66719bf4fc62612031c20a927c19afaeb372fbc2/68747470733a2f2f7773332e73696e61696d672e636e2f6c617267652f303036744b665463677931666a78626633316370356a33306d383065697133702e6a7067' },
          { name: 'uiGradients', href: 'https://uigradients.com', logo: 'http://wowacrylic.co.uk/71-189-large/75cm-x-50cm.jpg' }, 
          { name: '30s of CSS', href: 'https://atomiks.github.io/30-seconds-of-css/', logo: 'https://atomiks.github.io/30-seconds-of-css/e5b4b9ce166177b1bc2dc3772012e0a1.png' },
          { name: 'Stripe', href: 'https://stripe.com', logo: 'https://stripe.com/img/v3/home/twitter.png' },
          { name: 'Termly', href: 'https://termly.io', logo: 'https://termly.io/wp-content/themes/genesis-tly-v2/build/images/favicon-192.png' },
          { name: 'Copyrighted', href: 'https://www.copyrighted.com/', logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/1d/Red_copyright.svg/768px-Red_copyright.svg.png' },
          { name: 'startupnamecheck', href: 'https://startupnamecheck.com/?ref=producthunt', logo: 'http://downloadicons.net/sites/default/files/list-icon-63778.png' }

        ]
      },
      { name: 'Communities',
        description: 'Exploration, practice and inspiration',
        id: 'communities',
        leafs: [
          { name: 'StackOverflow', href: 'https://stackoverflow.com/', logo: 'https://i.stack.imgur.com/GKbCl.png' },
          { name: 'Medium', href: 'https://medium.com', logo: 'https://cdn-images-1.medium.com/max/1600/1*emiGsBgJu2KHWyjluhKXQw.png' },
          { name: 'HackerRank', href: 'https://www.hackerrank.com/dashboard', logo: 'http://www.lukashejtmanek.cz/assets/img/symbol_transparent.png' },
          { name: 'codewars', href: 'https://www.codewars.com/', logo: 'http://www.softlab.ntua.gr/~nickie/images/logo/codewars.png' },
          { name: 'Codrops', href: 'https://tympanus.net/codrops/category/tutorials/', logo: 'http://www.stickpng.com/assets/images/5847ebc2cef1014c0b5e4857.png' },
          { name: 'Tutorialzine', href: 'https://tutorialzine.com/', logo: 'https://pbs.twimg.com/profile_images/868061114160099328/BD0P3vsp_400x400.jpg' },
          { name: 'CSS-Tricks', href: 'https://css-tricks.com/', logo: 'https://cdn.css-tricks.com/wp-content/uploads/2014/03/css-tricks-star.png' },
          { name: 'StackShare', href: 'https://stackshare.io/', logo: 'https://static1.squarespace.com/static/564cbcb2e4b0741cdb668fe2/t/56b8c853d51cd41553c43507/1454950492725/StackShare.png' },
          { name: 'Coligo', href: 'https://coligo.io', logo: 'https://avatars2.githubusercontent.com/u/15895995?s=280&v=4' },
          { name: 'Awwwards', href: 'https://www.awwwards.com/', logo: 'https://assets.awwwards.com/bundles/tvweb/images/logo-schema.png' },
          { name: 'Smashing', href: 'https://www.smashingmagazine.com/', logo: 'http://www.stickpng.com/assets/images/58482e1fcef1014c0b5e4a66.png' },
          { name: 'HubSpot', href: 'https://www.hubspot.com/', logo: 'https://foxtailmarketing.com/wp-content/uploads/2015/05/hubspot-sprocket-logo.png' },
          { name: 'Alligator', href: 'https://alligator.io', logo: 'https://d33wubrfki0l68.cloudfront.net/4e5626a0b7db6b84c0b51f1c0cfd56490fc19b74/7a5ad/images/logo-fancy.svg' },
          { name: 'SitePoint', href: 'https://sitepoint.com', logo: 'http://www.stickpng.com/assets/images/58482e76cef1014c0b5e4a6c.png' },
          { name: 'Coursetro', href: 'https://coursetro.com', logo: 'https://coursetro.com/images/logo-new.svg' }
        ]
      }
    ]
  },
  mutations: {},
  actions: {},
  getters: {
    openedLeaf (state) {
      return (leafTo) => {
        return state.branches[0].leafs.find((leaf) => {
          return leaf.to === leafTo
        }) ||
        state.branches[1].leafs.find((leaf) => {
          return leaf.to === leafTo
        }) ||
        state.branches[2].leafs.find((leaf) => {
          return leaf.to === leafTo
        }) ||
        state.branches[3].leafs.find((leaf) => {
          return leaf.to === leafTo
        }) ||
        state.branches[4].leafs.find((leaf) => {
          return leaf.to === leafTo
        }) ||
        state.branches[5].leafs.find((leaf) => {
          return leaf.to === leafTo
        }) ||
        state.branches[6].leafs.find((leaf) => {
          return leaf.to === leafTo
        }) ||
        state.branches[7].leafs.find((leaf) => {
          return leaf.to === leafTo
        }) ||
        state.branches[8].leafs.find((leaf) => {
          return leaf.to === leafTo
        }) ||
        state.branches[9].leafs.find((leaf) => {
          return leaf.to === leafTo
        }) ||
        state.branches[10].leafs.find((leaf) => {
          return leaf.to === leafTo
        }) ||
        state.branches[11].leafs.find((leaf) => {
          return leaf.to === leafTo
        })
      }
    },
    branches (state) {
      return state.branches
    }
  }
}
