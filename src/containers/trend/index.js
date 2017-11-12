import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import Trend from '../../views/trend'
import { fetchTrend, fetchAuthors, updateFilter, getGraphData } from '../../modules/trend'

export default (resource, categoryKey, title) => {
  const mapStateToProps = state => ({
    loading: state.trend.loading,
    error: state.trend.error,
    categories: getGraphData(state.trend, categoryKey).categories,
    series: [getGraphData(state.trend, categoryKey).data],
    authors: state.trend.authorsReducer.authors,
    authorsLoading : state.trend.authorsReducer.loading,
    filters: state.trend.filters,
    resource,
    title
  })

  const mapDispatchToProps = dispatch => bindActionCreators({
    fetchTrend,
    fetchAuthors,
    updateFilter
  }, dispatch)

  return connect(
    mapStateToProps,
    mapDispatchToProps
  )(Trend)
}
