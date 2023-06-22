import React from 'react'
import {
  Loader,
  TextInput,
  Radio,
  Textarea,
  Group,
  Select,
} from "@mantine/core";
import { hasLength, useForm } from "@mantine/form";
import "../index.css";
//import Cookies from "js-cookie";
import { Link, useNavigate } from "react-router-dom";
import { useCreateRentMutation } from "../redux/api/rentApi";


const RentCreate = () => {
  const [createRent, { isLoading }] = useCreateRentMutation();
  //const token = Cookies.get("token");
  const nav = useNavigate();

  const form = useForm({
    initialValues: {
      id:Date.now(),
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
        "https://v.seloger.com/s/width/600/visuels/2/a/1/2/2a12ftteof9gg0xjeo21qugu9nzlc9xskkb9q5xbk.jpg"
        ],
        permalink:"https://momento360.com/e/u/3d2c47a8bf914a05ae50a67918a6684a?utm_campaign=embed&utm_source=other&heading=0&pitch=0&field-of-view=75&size=medium&display-plan=true",
        bullet: [
        "EPC rating C",
        "Unfurnished two-bedroom apartment",
        "Private courtyard garden",
        "Adjacent to the beautiful South Park"
        ],
        city: "Austin",
        county: "Travis",    },

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
              const {data} = await createRent(values);
              
              console.log("d", data);
             nav("/propertylist");
            } catch (error) {
              console.log(error);
            }
          })}
          className=" w-full "
        >
          {/* Property Start*/}
          <div className=" flex flex-col gap-3 my-5">
            <h2 className="text-xl">Create Sale</h2>
            <TextInput
              {...form.getInputProps("addressLine1")}
              label="Property Name"
              placeholder="Enter Name"
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
            <Radio.Group name="favoriteFramework" withAsterisk>
              <Group mt="xs">
                <Radio value="rent" label="For Rent" color="green" />
                <Radio value="sake" label="For Sale" color="green" />
              </Group>
            </Radio.Group>
            <TextInput
              {...form.getInputProps("price")}
              label="Price / Rent"
              placeholder="Enter Number"
            />
            <Textarea label="Property Address " />
            <Textarea label="Image " />
          </div>
          {/* Property End*/}

          {/* Bedrooms Start*/}
          <div className=" flex flex-col lg:flex-row justify-between items-start lg:items-center gap-3 my-5">
            <TextInput
              {...form.getInputProps("bedrooms")}
              label="Bedrooms"
              className=" w-full"
            />
            <TextInput
              {...form.getInputProps("bathrooms")}
              label="Bath Rooms"
              className=" w-full"
            />
            <TextInput
              {...form.getInputProps("squareFootage")}
              label="Square Ft"
              className=" w-full"
            />
          </div>
          {/* Bedrooms End*/}

          {/* Year Start*/}
          <div className=" flex flex-col lg:flex-row justify-between items-start lg:items-center gap-3 my-5">
            <TextInput
              {...form.getInputProps("yearBuilt")}
              label="Year Built"
              className=" w-full"
            />
            <TextInput
              {...form.getInputProps("city")}
              label="City"
              className=" w-full"
            />
            <TextInput
              {...form.getInputProps("state")}
              label="State"
              className=" w-full"
            />
          </div>
          <div className=" flex flex-col lg:flex-row justify-between items-start lg:items-center gap-3 my-5">
            <TextInput
              {...form.getInputProps("listedDate")}
              label="Listed Date"
              className=" w-full"
            />
            <TextInput
              {...form.getInputProps("createdDate")}
              label="Created Date"
              className=" w-full"
            />
            <TextInput
              {...form.getInputProps("state")}
              label="State"
              className=" w-full"
            />
          </div>

          <div className="my-5 flex flex-col lg:flex-row gap-5 justify-start items-start lg:items-center">
            <Select
              placeholder="Status"
              className=" w-full lg:w-52"
              data={[
                { value: "active", label: "Active" },
                { value: "inactive", label: "Inactive" },
              ]}
            />
            <Select
              placeholder="Type"
              className=" w-full lg:w-52"
              data={[
                { value: "single", label: "Single" },
                { value: "double", label: "Double" },
              ]}
            />
          </div>
          {/* Year End*/}

          {/* Amenities Start

          <div>
            <h1 className=" text-lg mb-3">Amenities</h1>
          </div>
          {/* Amenities End*/}

          {/* Dimension Start*/}

          <h1 className=" text-lg mb-3">Dimensions</h1>
          <div className=" flex flex-col lg:flex-row justify-between items-start lg:items-center gap-3 my-5">
            <TextInput
              {...form.getInputProps("livingRoom")}
              label="Living Room"
              className=" w-full"
            />
            <TextInput
              {...form.getInputProps("bedRoom")}
              label="Bedroom"
              className=" w-full"
            />
            <TextInput
              {...form.getInputProps("diningRoom")}
              label="Dining Room "
              className=" w-full"
            />
            <TextInput
              {...form.getInputProps("kitchen")}
              label="Kitchen"
              className=" w-full"
            />
          </div>
          {/* Dimension End*/}
          {/* Upload Start

          <h1 className=" text-lg my-5">Upload Files</h1>
          {/* Upload End*/}

          <button
            className="w-32 my-5 mr-5 py-2 px-3 leading-[24px] text-white bg-[#16a34a] hover:bg-[#138a3f] border rounded-sm border-none"
          >
            {isLoading ? (
              <div className=" flex justify-center items-center gap-1">
                <Loader color="bg-green-600" size="xs" />
                <span>Loading....</span>
              </div>
            ) : (
              "Add Rent"
            )}
          </button>
          <Link to={`/property`}>
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
      )
}

export default RentCreate

 {/*
             disabled={isLoading && true}
             type="submit"
          */}