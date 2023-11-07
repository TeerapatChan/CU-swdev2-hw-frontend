import { render, screen, waitFor } from "@testing-library/react";
import HospitalCatalog from "@/components/hospitalCatalog";

const mockHospital = {
  success: true,
  count: 3,
  data: [
    {
      _id: "65222f94f6dbb6eed36473da",
      name: "Chulalongkorn Hospital",
      address: "1873 Rama IV Rd",
      district: "Pathum Wan",
      province: "Bangkok",
      postalcode: "10330",
      tel: "026494000",
      picture:
        "https://drive.google.com/uc?id=1nekIjHnFtGMdbmsYrBao55dGvtYER62P",
      __v: 0,
      id: "65222f94f6dbb6eed36473da",
    },
    {
      _id: "65222febf6dbb6eed36473dd",
      name: "Rajavithi Hospital",
      address: "2 Phaya Thai Rd, Thung Phaya Thai",
      district: "Ratchathewi",
      province: "Bangkok",
      postalcode: "10400",
      tel: "022062900",
      picture:
        "https://drive.google.com/uc?id=15kWfVT9wchkH3I9BHKeqftTmj0bFgJtu",
      __v: 0,
      id: "65222febf6dbb6eed36473dd",
    },
    {
      _id: "65223022f6dbb6eed36473e0",
      name: "Thammasat University Hospital",
      address: "95 Moo 8 Phaholyothin Frontage Rd, Khlong Nueng",
      district: "Khlong Luang",
      province: "Pathum Thani",
      postalcode: "12120",
      tel: "029269999",
      picture:
        "https://drive.google.com/uc?id=1jit7S4cRATEfDi64YjjK1ur2jGlZYs2e",
      __v: 0,
      id: "65223022f6dbb6eed36473e0",
    },
  ],
};

describe("HospitalCatalog", () => {
  it("should have correct hospital pictures", async () => {
    const hospitalCatalog = await HospitalCatalog({
      hospitalJSON: mockHospital,
    });
    render(hospitalCatalog);

    await waitFor(() => {
      const hospitalPicture = screen.getAllByRole("img");
      expect(hospitalPicture).toHaveLength(3);
    });
  });
});
