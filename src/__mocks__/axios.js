const mockResponse = {
    data: {
        0: {
            Countries: [
                {
                    0: {
                        Country: 'Afghanistan',
                        CountryCode: 'AF',
                        NewConfirmed: 0,
                        NewDeaths: 0,
                        NewRecovered: 0,
                        TotalConfirmed: 174214,
                        TotalDeaths: 7619,
                        TotalRecovered: 0
                    }
                }
            ]
        }
    }
};

const aName = {
    get: jest.fn().mockResolvedValue(mockResponse)
};
export default aName;
