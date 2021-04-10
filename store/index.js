export default {
    async GET_RESUME_V1({commit}, resumeId) {
        commit('UPD_RESUME', await getResumeV1(resumeId))
      },
}
