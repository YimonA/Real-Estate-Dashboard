import React, { useState } from "react";
import {
  Loader,
  TextInput,
  Textarea,
  Group,
  Select,
  Checkbox,
} from "@mantine/core";
import { hasLength, useForm } from "@mantine/form";
import { DateInput } from "@mantine/dates";

import "../index.css";
import { Link, useNavigate } from "react-router-dom";
import { useCreatePropertyMutation } from "../redux/api/propertyApi";


import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";

const PropertyCreate = () => {
  const [createProperty, { isLoading }] = useCreatePropertyMutation();
  const [typeValue, setTypeValue] = useState("");
  const [statusValue, setStatusValue] = useState("");
  const [lDate, setLDate] = useState("");
  const [cDate, setCDate] = useState("");
  const [value, setValue] = useState([]);
  const [radioValue, setRadioValue] = useState("rent");
  const nav = useNavigate();

  const form = useForm({
    initialValues: {
      id: Date.now(),
      type: "",
      propertyType: "",
      status: "",
      addressLine1: "",
      formattedAddress: "",
      price: "",
      bedrooms: "",
      bathrooms: "",
      squareFootage: "",
      yearBuilt: "",
      listedDate: "",
      createdDate: "",
      livingRoom: "",
      bedRoom: "",
      diningRoom: "",
      kitchen: "",
      image: [
        "https://plus.unsplash.com/premium_photo-1686318003868-5069a10e8377?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80",
        "https://v.seloger.com/s/width/600/visuels/1/0/b/p/10bpx8din43tkf2tdlgo7fv3dmg3f7gnz3u6enj00.jpg",
        "https://v.seloger.com/s/width/600/visuels/2/a/1/2/2a12ftteof9gg0xjeo21qugu9nzlc9xskkb9q5xbk.jpg",
      ],
      permalink:
        "https://momento360.com/e/u/3d2c47a8bf914a05ae50a67918a6684a?utm_campaign=embed&utm_source=other&heading=0&pitch=0&field-of-view=75&size=medium&display-plan=true",
      bullet: [
        "EPC rating C",
        "Unfurnished two-bedroom apartment",
        "Private courtyard garden",
        "Adjacent to the beautiful South Park",
      ],
      city: "",
    },

    validate: {
      addressLine1: (value) =>
        value.length < 3
          ? "Property Location must have at least 3 characters"
          : null,
      formattedAddress: (value) =>
        value.length < 3
          ? "Property Address must have at least 10 characters"
          : null,
      price: hasLength({ min: 2 }),
      squareFootage: hasLength({ min: 2 }),

      /* 
      yearBuilt: hasLength({ min: 3 }),
      livingRoom: (value) =>
        value.length < 3 ? "Living Room must have at least 3 characters" : null,
      bedRoom: (value) =>
        value.length < 3
          ? "Bedroom Location must have at least 3 characters"
          : null,
      diningRoom: (value) =>
        value.length < 3
          ? "Dining Room Location must have at least 3 characters"
          : null,
      kitchen: (value) =>
        value.length < 3 ? "Kitchen must have at least 3 characters" : null,
            */
    },
  });

  return (
    <div className=" bg-[#EDF1F5] pt-5">
      <div className=" container mx-auto px-7 py-5 pb-20 bg-white">
        <form
          onSubmit={form.onSubmit(async (values) => {
            try {
              const { data } = await createProperty(
                values,
                (values["propertyType"] = typeValue),
                (values["status"] = statusValue),
                (values["createdDate"] = cDate),
                (values["listedDate"] = lDate),
                (values["bullet"] = value),
                (values["type"] = radioValue)
              );
              console.log("v", values);
              console.log("d", data);
              setTimeout(() => {
                nav("/");
              }, 1000);
            } catch (error) {
              console.log(error);
            }
          })}
          className=" w-full "
        >
          {/* Property Start*/}
          <div className=" flex flex-col gap-3 my-5">
            <h2 className="text-xl">Create Property</h2>
            <TextInput
              {...form.getInputProps("addressLine1")}
              label="Property Address"
              placeholder="Enter Address"
              className="myInput"
            />
            <TextInput
              {...form.getInputProps("formattedAddress")}
              label="Property Location"
              placeholder="Enter Location"
            />
            <Textarea
              placeholder="Enter Description"
              label="Property Description"
            />
            <TextInput
              {...form.getInputProps("price")}
              label="Price"
              placeholder="Enter Number"
            />
          </div>
          {/* Property End*/}

          {/* Bedrooms Start*/}
          <div className=" flex flex-col lg:flex-row justify-between items-start lg:items-center gap-3 my-5">
            <TextInput
              {...form.getInputProps("bedrooms")}
              label="Bedrooms"
              placeholder="eg.(1) "
              className=" w-full"
            />
            <TextInput
              {...form.getInputProps("bathrooms")}
              label="Bath Rooms"
              placeholder="eg.(1) "
              className=" w-full"
            />
            <TextInput
              {...form.getInputProps("squareFootage")}
              label="Square Ft"
              className=" w-full"
              placeholder="eg.(2000) "
            />
          </div>
          {/* Bedrooms End*/}

          {/* Year Start*/}
          <div className=" flex flex-col lg:flex-row justify-between items-start lg:items-center gap-3 my-5">
            <TextInput
              {...form.getInputProps("yearBuilt")}
              label="Year Built"
              className=" w-full "
            />
            <TextInput
              {...form.getInputProps("city")}
              label="City"
              className=" w-full "
            />
            <TextInput
              {...form.getInputProps("state")}
              label="State"
              className=" w-full"
            />
          </div>

          <div className="my-5 flex flex-col lg:flex-row gap-5 justify-start items-start">
            <Select
              placeholder="Status"
              className=" w-full "
              value={statusValue}
              onChange={setStatusValue}
              data={[
                { value: "active", label: "Active" },
                { value: "inactive", label: "Inactive" },
              ]}
              styles={(theme) => ({
                item: {
                  // applies styles to selected item
                  "&[data-selected]": {
                    "&, &:hover": {
                      backgroundColor: theme.colors.blue[0],
                      color: theme.black,
                    },
                  },

                  // applies styles to hovered item (with mouse or keyboard)
                  "&[data-hovered]": {},
                },
              })}
            />
            <Select
              placeholder="Type"
              className=" w-full "
              value={typeValue}
              onChange={setTypeValue}
              data={[
                { value: "apartment", label: "Apartment" },
                { value: "villa", label: "Villa" },
                { value: "cottage", label: "Cottage" },
                { value: "flat", label: "Flat" },
                { value: "house", label: "House" },
              ]}
              styles={(theme) => ({
                item: {
                  // applies styles to selected item
                  "&[data-selected]": {
                    "&, &:hover": {
                      backgroundColor: theme.colors.blue[0],
                      color: theme.black,
                    },
                  },
                  // applies styles to hovered item (with mouse or keyboard)
                  "&[data-hovered]": {},
                },
              })}
            />
          </div>
          {/* Year End*/}
          <div className=" flex flex-col lg:flex-row justify-start items-start gap-3 my-5">
            <Checkbox.Group
              label="Amenties"
              className=" text-lg"
              onChange={setValue}
              withAsterisk
            >
              <Group mt="xs">
                <Checkbox
                  value="Swimming Pool"
                  label="Swimming Pool"
                />
                <Checkbox value="Wifi" label="Wifi" />
                <Checkbox value="Gym" label="Gym" />
                <Checkbox value="Parking" label="Parking" />
                <Checkbox value="Balcony" label="Balcony" />
                <Checkbox value="WaterFront" label="WaterFront" />
                <Checkbox value="Garden" label="Garden" />
                <Checkbox
                  value="Basketball Court"
                  label="Basketball Court"
                />
              </Group>
            </Checkbox.Group>
          </div>
          <div className=" ">
          <RadioGroup
              aria-labelledby="demo-controlled-radio-buttons-group"
              name="controlled-radio-buttons-group"
              value={radioValue}
              onChange={(e) => setRadioValue(e.target.value)}
            >
              <FormControlLabel
                color="success"
                value="rent"
                control={<Radio />}
                label="For Rent"
              />
              <FormControlLabel
                color="success"
                value="sale"
                control={<Radio />}
                label="For Sale"
              />
            </RadioGroup>
          </div>
          <div className=" flex flex-col lg:flex-row justify-start items-start gap-3 my-5">
            <DateInput
              valueFormat="YYYY-MM-DD"
              label="Listed Date"
              placeholder="Date"
              value={lDate}
              onChange={setLDate}
              maw={400}
              mx="auto"
              className=" w-full mx-0"
            />
            <DateInput
              valueFormat="YYYY-MM-DD"
              label="Created Date"
              placeholder="Date"
              value={cDate}
              onChange={setCDate}
              maw={400}
              mx="auto"
              className=" w-full mx-0"
            />
          </div>

          <h1 className=" text-lg">Dimensions</h1>
          <div className=" flex flex-col lg:flex-row justify-between items-start lg:items-center gap-3 my-5">
            <TextInput
              {...form.getInputProps("livingRoom")}
              label="Living Room"
              placeholder="eg.(10x10)"
              className=" w-full"
            />
            <TextInput
              {...form.getInputProps("bedRoom")}
              label="Bedroom"
              placeholder="eg.(10x10)"
              className=" w-full"
            />
            <TextInput
              {...form.getInputProps("diningRoom")}
              label="Dining Room "
              placeholder="eg.(10x10)"
              className=" w-full"
            />
            <TextInput
              {...form.getInputProps("kitchen")}
              label="Kitchen"
              placeholder="eg.(10x10)"
              className=" w-full"
            />
          </div>
          {/* Dimension End*/}

          <button
            disabled={isLoading && true}
            type="submit"
            className="w-52 my-5 mr-5 py-2 px-3 leading-[24px] text-white bg-[#16a34a] hover:bg-[#138a3f] border rounded-sm border-none"
          >
            {isLoading ? (
              <div className=" flex justify-center items-center gap-1">
                <Loader color="white" size="xs" />
                <span>Loading....</span>
              </div>
            ) : (
              "Create Property"
            )}
          </button>
          <Link to={`/`}>
            <button
              disabled={isLoading && true}
              type="submit"
              className="w-20 my-5 py-2 px-3 leading-[24px] text-white bg-gray-800 hover:bg-gray-900 border rounded-sm border-none"
            >
              Cancel
            </button>
          </Link>
        </form>
      </div>
    </div>
  );
};

export default PropertyCreate;
