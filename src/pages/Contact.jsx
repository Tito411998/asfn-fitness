function Contact() {
  return (
    <div className="max-w-xl mx-auto mt-20 p-4 bg-white text-black rounded-lg shadow-lg">
      <h2 className="text-2xl font-bold mb-4">تواصل معنا</h2>
      <form className="flex flex-col space-y-4">
        <input type="text" placeholder="الاسم" className="border p-2 rounded" />
        <input type="email" placeholder="البريد الإلكتروني" className="border p-2 rounded" />
        <textarea placeholder="رسالتك" className="border p-2 rounded"></textarea>
        <button type="submit" className="bg-primary text-white p-2 rounded">إرسال</button>
      </form>
    </div>
  )
}

export default Contact
