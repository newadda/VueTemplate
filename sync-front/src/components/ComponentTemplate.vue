<template>
  <div></div>
</template>
<script>
export default {
  // 사용 되는 컴포넌트 목록 {Test1,Test2}
  components: {},

  /// change 란 event 로 변경사항을 위로 알려준다. Binding 된 상위 변수가 바뀐다.
  /// props 목록에 존재하는 변수여야 한다.
  model: {
    prop: "selected",
    event: "change",
  },

  props: {
    selected: {
      type: [Number, String],
      default: null,
    },
  },

  data() {
    return {
      loading: false,

      /// validation 을 위한 rules 목록이다.
      rules: {
        /*  group: [(v) => String(v) !== String(-1) || this.$t('validate.required')],
        name: [
          (v) => isRequired(v) || this.$t('validate.required'),
          (v) => isRange(v, 1, 40) || this.$t('validate.range', { min: 1, max: 40 }),
        ],*/
      },
    };
  },

  /// 읽기 전용 변수로써 어떤 값을 표시하는 방법을 넣으면 된다.
  /// wpf 의 converter 로써 사용하면 된다.
  computed: {
    /*formTitle() {
      return this.editedIndex === -1 ? `${this.$t('common.add')}` : `${this.$t('common.update')}`;
    },*/
  },

  /// data 의 변경을 catch 할 수 있다.
  watch: {
    /* dialog(val) {
      val || this.close();
      if (val === true) {
        this.getGroupList();
      }
    },*/
  },

  // 콤포넌트 생성시
  created() {
    //this.initialize();
  },

  // UI에 마운트시 동작
  mounted() {
    this.mapInit();
    this.createFeature();
  },

  /// UI에 언마운트시 동작
  unmounted() {},
  /// 메소드
  methods: {
    initialize() {
      this.resetEditedItem();
      this.datas = [];
      this.refresh();
    },
    modelChange(value) {
      this.$emit("change", value);
    },
  },
};
</script>
