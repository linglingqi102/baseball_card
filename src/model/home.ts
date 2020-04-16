export default {
  namespace: "home",
  state: {
    banner: [
      {
        imgUrl:
          "https://cdn-global1.unicareer.com/autumnRecruitment/bannerImg/%E7%A8%BF%E5%AE%9A%E8%AE%BE%E8%AE%A1%E5%AF%BC%E5%87%BA-20190716-1813211563334421371.png"
      }
    ]
  },
  reducers: {
    setBanner: (state, { banner }) => {
      return { ...state, banner };
    }
  }
};
