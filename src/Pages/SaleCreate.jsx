import React from "react";
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
import { useCreateSaleMutation } from "../redux/api/saleApi";

const SaleCreate = () => {
  const [createSale, { isLoading }] = useCreateSaleMutation();
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
      image: "",
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
              const {data} = await createSale(values);
              console.log("v", values);
              //console.log('id',id);

              //console.log("t", token);
              console.log("d", data);
              //dispatch(addUser({ user: data?.user, token: data?.token }));
              //nav("/property");
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

          <div className="my-5 flex flex-col lg:flex-row gap-5 justify-start items-start lg:items-center my-5">
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
          {/* Upload Start */}

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
              "Add Sale"
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
  );
};

export default SaleCreate;
//disabled={isLoading && true}
//type="submit"