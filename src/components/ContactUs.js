const ContactUs = () => {
  return (
    <div>
      <h1 className="font-bold text-3xl m-4 p-4">Contact Us</h1>
      <form>
        <input
          type="text"
          className="border border-black m-2 p-2"
          placeholder="name"
        />
        <input
          type="text"
          className="border border-black m-2 p-2"
          placeholder="messages"
        />
        <button className="border border-black m-2 p-2 bg-green-300 rounded-lg">
          Submit
        </button>
      </form>
    </div>
  );
};

export default ContactUs;
