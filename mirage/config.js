export default function() {
  this.urlPrefix = 'https://tzupxtpfmg.execute-api.us-east-1.amazonaws.com';
  this.timing = 500;

  this.post('/Prod/score-image', () => {
    return {
      "animal": {
        "id": "4",
        "type": "dog"
      },
      "image": {
        "id": "b874e6c1-d71e-4dab-99cf-ace2ef69788b",
        "path": {
          "s3_bucket": "shelter-art-foundation",
          "s3_path": "dev/93523509-4c06-4fc2-aeae-b174074772b5.jpeg",
          "http_url": "../assets/images/black3.jpg",
          "s3_url": "s3://shelter-art-foundation/dev/e3079aa2-2dcf-4824-b11e-07c0d361bfb5.jpeg"
        }
      },
      "analysis": {
        "overall_score": 4,
        "good_prop": 0,
        "bad_prop": 0,
        "clean_background": 1,
        "animal_fills_frame": 1
      }
    }
  });
  // this.get('/Prod/list', () => {
  //   return [{
  //         "animal": {
  //           "id": "1",
  //           "type": "cat"
  //         },
  //         "image": {
  //           "id": "b874e6c1-d71e-4dab-99cf-ace2ef69788a",
  //           "path": {
  //             "s3_bucket": "shelter-art-foundation",
  //             "s3_path": "dev/93523509-4c06-4fc2-aeae-b174074772b5.jpeg",
  //             "http_url": "https://shelter-art-foundation.s3.amazonaws.com/dev/e3079aa2-2dcf-4824-b11e-07c0d361bfb5.jpeg",
  //             "s3_url": "s3://shelter-art-foundation/dev/e3079aa2-2dcf-4824-b11e-07c0d361bfb5.jpeg"
  //           }
  //         },
  //         "analysis": {
  //           "overall_score": 3,
  //           "good_prop": 1,
  //           "bad_prop": 0,
  //           "clean_background": 1,
  //           "animal_fills_frame": 0,
  //           "some_space_above": 1
  //         }
  //       },
  //       {
  //         "animal": {
  //           "id": "2",
  //           "type": "dog"
  //         },
  //         "image": {
  //           "id": "b874e6c1-d71e-4dab-99cf-ace2ef69788c",
  //           "path": {
  //             "s3_bucket": "shelter-art-foundation",
  //             "s3_path": "dev/93523509-4c06-4fc2-aeae-b174074772b5.jpeg",
  //             "http_url": "https://shelter-art-foundation.s3.amazonaws.com/dev/93523509-4c06-4fc2-aeae-b174074772b5.jpeg",
  //             "s3_url": "s3://shelter-art-foundation/dev/93523509-4c06-4fc2-aeae-b174074772b5.jpeg"
  //           }
  //         },
  //         "analysis": {
  //           "overall_score": 3,
  //           "good_prop": 1,
  //           "bad_prop": 0,
  //           "clean_background": 1,
  //           "animal_fills_frame": 0,
  //           "some_space_above": 1
  //         }
  //       },
  //       {
  //         "animal": {
  //           "id": "3",
  //           "type": "cat"
  //         },
  //         "image": {
  //           "id": "b874e6c1-d71e-4dab-99cf-ace2ef69788d",
  //           "path": {
  //             "s3_bucket": "shelter-art-foundation",
  //             "s3_path": "dev/93523509-4c06-4fc2-aeae-b174074772b5.jpeg",
  //             "http_url": "https://shelter-art-foundation.s3.amazonaws.com/dev/93523509-4c06-4fc2-aeae-b174074772b5.jpeg",
  //             "s3_url": "s3://shelter-art-foundation/dev/93523509-4c06-4fc2-aeae-b174074772b5.jpeg"
  //           }
  //         },
  //         "analysis": {
  //           "overall_score": 3,
  //           "good_prop": 1,
  //           "bad_prop": 0,
  //           "clean_background": 1,
  //           "animal_fills_frame": 0,
  //           "some_space_above": 1
  //         }
  //       }];
  // });

//   /*
  this.get('/Prod/list', () => {
      return [{
      "animal": {
        "id": 1,
        "type": "dog"
      },
      "images": [
      {
        "id": "b874e6c1-d71e-4dab-99cf-ace2ef69788c",
        "http_url": "../assets/images/dogpic.jpg",
        "s3_url": "s3://shelter-art-foundation/dev/93523509-4c06-4fc2-aeae-b174074772b5.jpeg",
        "analysis": {
          "overall_score": 2,
          "good_prop": 0,
          "bad_prop": 1,
          "clean_background": 1,
          "animal_fills_frame": 0
        }
      },
      {
        "id": "b874e6c1-d71e-4dab-99cf-ace2ef69788d",
        "http_url": "../assets/images/german.jpg",
        "s3_url": "s3://shelter-art-foundation/dev/93523509-4c06-4fc2-aeae-b174074772b5.jpeg",
        "analysis": {
          "overall_score": 1,
          "good_prop": 0,
          "bad_prop": 0,
          "clean_background": 0,
          "animal_fills_frame": 0
        }
      }
    ]
  }];
 });

//   // These comments are here to help you get started. Feel free to delete them.

//   /*
//     Config (with defaults).

//     Note: these only affect routes defined *after* them!
//   */

//   // this.urlPrefix = '';    // make this `http://localhost:8080`, for example, if your API is on a different server
//   // this.namespace = '';    // make this `/api`, for example, if your API is namespaced
//   // this.timing = 400;      // delay for each request, automatically set to 0 during testing

//   /*
//     Shorthand cheatsheet:

//     this.get('/posts');
//     this.post('/posts');
//     this.get('/posts/:id');
//     this.put('/posts/:id'); // or this.patch
//     this.del('/posts/:id');

//     https://www.ember-cli-mirage.com/docs/route-handlers/shorthands
//   */
}
