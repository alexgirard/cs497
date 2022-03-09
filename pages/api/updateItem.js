import { table, getMinifiedItem } from '../../utils/Airtable';

// takes an array of up to 10 record objects
export default async (req, res) => {
  const { id, fields } = req.body;
  try {
    const updatedRecords = await table.update([{ id, fields }]);
    res.status(200).json(getMinifiedItem(updatedRecords[0]));
  } catch (error) {
    console.log(error);
    res.status(500).json({ msg: 'Something went wrong! 😕' });
  }
};
