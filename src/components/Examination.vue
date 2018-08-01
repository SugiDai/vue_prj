<template>
    <div class='Examination' >
      <b-card-group deck class="mb-3">
        <b-card border-variant="primary"
                v-bind:header="exam.questions[0].title"
                header-bg-variant="primary"
                header-text-variant="white"
                align="center">
          <p class="q-description"> No:{{exam.questions[0].no}} </p>
          <p class="q-description">{{exam.questions[0].description}} </p>
          <pre class="source-code">{{exam.questions[0].source_code}}</pre>
          <footer class="blockquote-footer">Someone famous in <cite title="Source Title">Source Title</cite></footer>
          <b-button href="./test" size="sm" variant="outline-primary" > Next ->> </b-button>
        </b-card>
      </b-card-group>
    </div>
</template>

<script>
export default {
  name: 'Examination',
  data () {
    return {
      exam: {
        title:"Oracle Java Silver",
        time:5,
        questions:[
            {
                no: 1,
                id: "000001",
                exam_kind:"01",
                title: "Class構文",
                description: "XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX",
                source_code: "class uho:\n\n    def __init__(self, name):\n        self.name = name",
                replies: [
                    {type:0, sentence:"解答1番目XXXXXX"},
                    {type:0, sentence:"解答2番目XXXXXX"},
                    {type:0, sentence:"解答3番目XXXXXX"},
                    {type:0, sentence:"解答4番目XXXXXX"}
                ]
            },
            {
                no: 2,
                id: "000002",
                exam_kind:"02",
                title: "Class構文2",
                description: "2JavaでるXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX",
                replies: [
                    {type:1, sentence:"解答6番目XXXXXX"},
                    {type:1, sentence:"解答7番目XXXXXX"},
                    {type:1, sentence:"解答8番目XXXXXX"},
                    {type:1, sentence:"解答9番目XXXXXX"}
                ]
            },

        ]
      },
    }
  },

}
</script>

<style>

.Examination{
    margin:10px;
}

.q-description{
    text-align: left;
}

.source-code {
    padding: 20px;
    text-align: left;
    background-color:#000;
    color:#FFF;
    white-space: pre-wrap;
}
</style>
