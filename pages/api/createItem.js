import { table, getMinifiedItem } from '../../utils/Airtable';

// takes an array of up to 10 record objects
export default async (req, res) => {
  try {
    const newRecords = await table.create([{ fields: req.body }]);
    res.status(200).json(getMinifiedItem(newRecords[0]));
  } catch (error) {
    console.log(error);
    res.status(500).json({ msg: 'Something went wrong! 😕' });
  }
};
