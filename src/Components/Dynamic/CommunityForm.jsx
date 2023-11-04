import { useState } from "react";
import {
  prepareWriteContract,
  waitForTransaction,
  writeContract,
} from "@wagmi/core";
import { useAccount } from "wagmi";
import communityABI from "../../../src/artifacts/communityABI.json";

const CommunityForm = () => {
  const { address } = useAccount();
  const communityAddress = "0x2e74ee9757B7D438ffd1D693539d1e5EBE4D9e1F";
  const [data, setData] = useState({});

  const handleInput = (e) => {
    const form = e.target;
    const field = form.name;
    const value = form.value;
    const newData = { ...data };
    newData[field] = value;
    setData(newData);
  };

  const createCommunity = async (e) => {
    e.preventDefault();
    try {
      const { request } = await prepareWriteContract({
        abi: communityABI,
        address: communityAddress,
        functionName: "createCommunity",
        args: [
          data.title,
          data.description,
          data.tokenName,
          data.tokenSymbol,
          data.rate,
        ],
        account: address,
      });

      const { hash } = await writeContract(request);
      await waitForTransaction({
        hash,
      });
      alert(`Transaction confirmed with hash ${hash}!`);
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div className="card card-side bg-base-100 shadow-xl w-1/4 mx-auto mt-20">
      <div className="card-body">
        <h6 class="text-center text-xl font-bold">Create a Community</h6>
        <form onSubmit={createCommunity} className="flex flex-col">
          <label>Title:</label>
          <input
            onChange={handleInput}
            type="text"
            name="title"
            required
            className="p-1 rounded"
          />
          <br />
          <label>Description:</label>
          <input
            onChange={handleInput}
            type="text"
            name="description"
            required
            className="p-1 rounded"
          />
          <br />
          <label>Token name:</label>
          <input
            onChange={handleInput}
            type="text"
            name="tokenName"
            required
            className="p-1 rounded"
          />
          <br />
          <label>Token symbol:</label>
          <input
            onChange={handleInput}
            type="text"
            name="tokenSymbol"
            required
            className="p-1 rounded"
          />
          <br />
          <label>Exhange rate:</label>
          <input
            onChange={handleInput}
            type="text"
            name="rate"
            required
            className="p-1 rounded"
          />
          <div className="flex justify-center mt-5">
            <button
              type="submit"
              className="bg-blue-600 p-2 rounded text-white"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default CommunityForm;
