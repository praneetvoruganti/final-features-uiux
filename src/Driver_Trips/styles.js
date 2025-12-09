import { StyleSheet, Dimensions } from 'react-native';

const { width } = Dimensions.get('window');

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FAFAFA',
  },

  // simple clean header
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    paddingTop: 50,
    paddingBottom: 16,
    backgroundColor: '#FAFAFA',
  },
  backButton: {
    width: 40,
    height: 40,
    borderRadius: 12,
    backgroundColor: 'rgba(0,0,0,0.04)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  backIcon: {
    fontSize: 32,
    color: '#201E1E',
    fontWeight: '300',
  },
  headerTitle: {
    fontSize: 20,
    fontWeight: '700',
    color: '#201E1E',
    letterSpacing: -0.3,
    flex: 1,
    textAlign: 'center',
  },
  headerSpacer: {
    width: 40,
  },

  scrollView: {
    flex: 1,
  },
  scrollContent: {
    paddingBottom: 32,
  },

  // metrics clean
  tripMetrics: {
    flexDirection: 'row',
    marginHorizontal: 20,
    marginTop: 20,
    padding: 20,
    backgroundColor: '#FFFFFF',
    borderRadius: 16,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.05,
    shadowRadius: 8,
    elevation: 3,
  },
  metricItem: {
    flex: 1,
    alignItems: 'center',
  },
  metricValue: {
    fontSize: 24,
    fontWeight: '800',
    color: '#1A1A1A',
    marginBottom: 4,
  },
  metricLabel: {
    fontSize: 12,
    fontWeight: '600',
    color: '#999999',
    textTransform: 'uppercase',
    letterSpacing: 0.5,
  },
  metricDivider: {
    width: 1,
    backgroundColor: 'rgba(0,0,0,0.08)',
    marginHorizontal: 20,
  },

  // location elegant
  locationCard: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    marginHorizontal: 20,
    marginTop: 16,
    padding: 16,
    backgroundColor: '#FFFFFF',
    borderRadius: 16,
    borderLeftWidth: 3,
    borderLeftColor: '#EE436E',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.05,
    shadowRadius: 8,
    elevation: 3,
  },
  locationDot: {
    width: 10,
    height: 10,
    borderRadius: 5,
    backgroundColor: '#EE436E',
    marginTop: 6,
    marginRight: 12,
  },
  locationText: {
    flex: 1,
    fontSize: 14,
    fontWeight: '600',
    color: '#1A1A1A',
    lineHeight: 20,
  },

  // fare display hero
  fareDisplayContainer: {
    marginHorizontal: 20,
    marginTop: 24,
    paddingVertical: 32,
    paddingHorizontal: 24,
    backgroundColor: '#FFFFFF',
    borderRadius: 20,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.04,
    shadowRadius: 8,
    elevation: 2,
  },
  fareAmount: {
    fontSize: 64,
    fontWeight: '900',
    color: '#201E1E',
    letterSpacing: -3,
  },
  fareBonus: {
    fontSize: 14,
    fontWeight: '700',
    color: '#34C759',
    marginTop: 6,
  },

  // add fare optimized for conversion
  addFareSection: {
    marginHorizontal: 20,
    marginTop: 16,
  },
  addFareLabel: {
    fontSize: 11,
    fontWeight: '700',
    color: '#999999',
    letterSpacing: 0.8,
    marginBottom: 10,
    textTransform: 'uppercase',
  },
  fareButtonsContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    gap: 8,
  },
  fareButton: {
    minWidth: 60,
    paddingVertical: 10,
    backgroundColor: '#F8F8F8',
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#E8E8E8',
  },
  fareButtonSelected: {
    backgroundColor: '#EE436E',
    borderColor: '#EE436E',
  },
  fareButtonText: {
    fontSize: 14,
    fontWeight: '700',
    color: '#666666',
    textAlign: 'center',
  },
  fareButtonTextSelected: {
    color: '#FFFFFF',
  },

  // action section optimized
  actionSection: {
    paddingHorizontal: 20,
    paddingTop: 28,
  },

  // accept button hero
  acceptButton: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#EE436E',
    paddingVertical: 20,
    borderRadius: 16,
    marginBottom: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.15,
    shadowRadius: 8,
    elevation: 5,
  },
  acceptButtonText: {
    fontSize: 18,
    fontWeight: '800',
    color: '#FFFFFF',
    letterSpacing: 0.5,
  },

  // timer clean inline
  timerRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 12,
    paddingVertical: 8,
  },
  timerLabel: {
    fontSize: 13,
    fontWeight: '600',
    color: '#999999',
    marginRight: 8,
  },
  timerText: {
    fontSize: 15,
    fontWeight: '800',
    color: '#201E1E',
    letterSpacing: 1,
  },

  // ignore very subtle
  ignoreButton: {
    paddingVertical: 12,
    alignItems: 'center',
  },
  ignoreButtonText: {
    fontSize: 14,
    fontWeight: '600',
    color: '#CCCCCC',
    letterSpacing: 0,
  },
});
