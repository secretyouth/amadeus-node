import Amadeus from '../../src/amadeus';

let amadeus;

describe('Namespaces', () => {
  it('should exports an Client object', () => {
    expect(Amadeus).toBeDefined();
  });

  describe('.instance', () => {
    beforeEach(() => {
      amadeus = new Amadeus({
        clientId: '123',
        clientSecret: '234'
      });
    });

    it('should define all expected paths', () => {
      expect(amadeus.referenceData).toBeDefined();
      expect(amadeus.referenceData.urls).toBeDefined();
      expect(amadeus.referenceData.urls.checkinLinks).toBeDefined();
      expect(amadeus.referenceData.location).toBeDefined();
      expect(amadeus.referenceData.locations).toBeDefined();
      expect(amadeus.referenceData.locations.airports).toBeDefined();
      expect(amadeus.referenceData.airlines).toBeDefined();

      expect(amadeus.travel).toBeDefined();
      expect(amadeus.travel.analytics).toBeDefined();
      expect(amadeus.travel.analytics.airTraffic).toBeDefined();
      expect(amadeus.travel.analytics.airTraffic.traveled).toBeDefined();
      expect(amadeus.travel.analytics.airTraffic.searched).toBeDefined();
      expect(amadeus.travel.analytics.airTraffic.searchedByDestination).toBeDefined();
      expect(amadeus.travel.analytics.airTraffic.booked).toBeDefined();
      expect(amadeus.travel.analytics.airTraffic.busiestPeriod).toBeDefined();


      expect(amadeus.shopping).toBeDefined();
      expect(amadeus.shopping.flightDates).toBeDefined();
      expect(amadeus.shopping.flightDestinations).toBeDefined();
      expect(amadeus.shopping.flightOffers).toBeDefined();

      expect(amadeus.shopping.hotelOffers).toBeDefined();
      expect(amadeus.shopping.hotelOffersByHotel).toBeDefined();
      expect(amadeus.shopping.hotelOffer).toBeDefined();
    });

    it('should define all expected .get methods', () => {
      expect(amadeus.referenceData.urls.checkinLinks.get).toBeDefined();
      expect(amadeus.referenceData.location('ALHR').get).toBeDefined();
      expect(amadeus.referenceData.locations.get).toBeDefined();
      expect(amadeus.referenceData.locations.airports.get).toBeDefined();
      expect(amadeus.referenceData.airlines.get).toBeDefined();

      expect(amadeus.travel.analytics.airTraffic.searched.get).toBeDefined();
      expect(amadeus.travel.analytics.airTraffic.searchedByDestination.get).toBeDefined();
      expect(amadeus.travel.analytics.airTraffic.traveled.get).toBeDefined();
      expect(amadeus.travel.analytics.airTraffic.booked.get).toBeDefined();
      expect(amadeus.travel.analytics.airTraffic.busiestPeriod.get).toBeDefined();

      expect(amadeus.shopping.flightDates.get).toBeDefined();
      expect(amadeus.shopping.flightDestinations.get).toBeDefined();
      expect(amadeus.shopping.flightOffers.get).toBeDefined();

      expect(amadeus.shopping.hotelOffers.get).toBeDefined();
      expect(amadeus.shopping.hotelOffersByHotel.get).toBeDefined();
      expect(amadeus.shopping.hotelOffer('XXX').get).toBeDefined();
    });

    it('.amadeus.referenceData.urls.checkinLinks.get', () => {
      amadeus.client.get = jest.fn();
      amadeus.referenceData.urls.checkinLinks.get();
      expect(amadeus.client.get)
        .toHaveBeenCalledWith('/v2/reference-data/urls/checkin-links', {});
    });

    it('.amadeus.referenceData.location().get', () => {
      amadeus.client.get = jest.fn();
      amadeus.referenceData.location('ALHR').get();
      expect(amadeus.client.get)
        .toHaveBeenCalledWith('/v1/reference-data/locations/ALHR', {});
    });

    it('.amadeus.referenceData.locations.get', () => {
      amadeus.client.get = jest.fn();
      amadeus.referenceData.locations.get();
      expect(amadeus.client.get)
        .toHaveBeenCalledWith('/v1/reference-data/locations', {});
    });

    it('.amadeus.referenceData.locations.airports.get', () => {
      amadeus.client.get = jest.fn();
      amadeus.referenceData.locations.airports.get();
      expect(amadeus.client.get)
        .toHaveBeenCalledWith('/v1/reference-data/locations/airports', {});
    });

    it('.amadeus.referenceData.airlines.get', () => {
      amadeus.client.get = jest.fn();
      amadeus.referenceData.airlines.get();
      expect(amadeus.client.get)
        .toHaveBeenCalledWith('/v1/reference-data/airlines', {});
    });

    it('.amadeus.travel.analytics.airTraffic.searched.get', () => {
      amadeus.client.get = jest.fn();
      amadeus.travel.analytics.airTraffic.searched.get();
      expect(amadeus.client.get)
        .toHaveBeenCalledWith('/v1/travel/analytics/air-traffic/searched', {});
    });

    it('.amadeus.travel.analytics.airTraffic.searchedByDestination.get', () => {
      amadeus.client.get = jest.fn();
      amadeus.travel.analytics.airTraffic.searchedByDestination.get();
      expect(amadeus.client.get)
        .toHaveBeenCalledWith('/v1/travel/analytics/air-traffic/searched/by-destination', {});
    });

    it('.amadeus.travel.analytics.airTraffic.traveled.get', () => {
      amadeus.client.get = jest.fn();
      amadeus.travel.analytics.airTraffic.traveled.get();
      expect(amadeus.client.get)
        .toHaveBeenCalledWith('/v1/travel/analytics/air-traffic/traveled', {});
    });

    it('.amadeus.travel.analytics.airTraffic.booked.get', () => {
      amadeus.client.get = jest.fn();
      amadeus.travel.analytics.airTraffic.booked.get();
      expect(amadeus.client.get)
        .toHaveBeenCalledWith('/v1/travel/analytics/air-traffic/booked', {});
    });

    it('.amadeus.travel.analytics.airTraffic.busiestPeriod.get', () => {
      amadeus.client.get = jest.fn();
      amadeus.travel.analytics.airTraffic.busiestPeriod.get();
      expect(amadeus.client.get)
        .toHaveBeenCalledWith('/v1/travel/analytics/air-traffic/busiest-period', {});
    });

    it('.amadeus.shopping.flightDates.get', () => {
      amadeus.client.get = jest.fn();
      amadeus.shopping.flightDates.get();
      expect(amadeus.client.get)
        .toHaveBeenCalledWith('/v1/shopping/flight-dates', {});
    });

    it('.amadeus.shopping.flightDestinations.get', () => {
      amadeus.client.get = jest.fn();
      amadeus.shopping.flightDestinations.get();
      expect(amadeus.client.get)
        .toHaveBeenCalledWith('/v1/shopping/flight-destinations', {});
    });

    it('.amadeus.shopping.flightOffers.get', () => {
      amadeus.client.get = jest.fn();
      amadeus.shopping.flightOffers.get();
      expect(amadeus.client.get)
        .toHaveBeenCalledWith('/v1/shopping/flight-offers', {});
    });

    it('.amadeus.shopping.hotelOffers.get', () => {
      amadeus.client.get = jest.fn();
      amadeus.shopping.hotelOffers.get();
      expect(amadeus.client.get)
        .toHaveBeenCalledWith('/v2/shopping/hotel-offers', {});
    });

    it('.amadeus.shopping.hotelOffersByHotel.get', () => {
      amadeus.client.get = jest.fn();
      amadeus.shopping.hotelOffersByHotel.get();
      expect(amadeus.client.get)
        .toHaveBeenCalledWith('/v2/shopping/hotel-offers/by-hotel', {});
    });

    it('.amadeus.shopping.hotelOffer().get', () => {
      amadeus.client.get = jest.fn();
      amadeus.shopping.hotelOffer('XXX').get();
      expect(amadeus.client.get)
        .toHaveBeenCalledWith('/v2/shopping/hotel-offers/XXX', {});
    });
  });
});
