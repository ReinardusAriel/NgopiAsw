function Register(){
    return(
        <div className="min-h-screen flex items-center justify-center bg-gray-100">
            <div className="bg-white shadow-2xl rounded-2xl overflow-hidden grid grid-cols-1 md:grid-cols-2 w-full max-w-4xl">
                
                <div className="hidden md:block">
                <img
                    src="https://i.pinimg.com/1200x/b7/10/02/b710026f6e3fc5f295b4810a002d001f.jpg"
                    alt="poster"
                    className="h-full w-full object-cover"
                />
                </div>

                <div className="p-10 flex flex-col justify-center">
                <h2 className="text-4xl font-bold text-yellow-900 mb-6">
                    Register
                </h2>

                <div className="space-y-4">
                    <div>
                    <label className="label text-yellow-900">Username</label>
                    <input
                        type="text"
                        className="input input-bordered w-full"
                        placeholder="Enter your email"
                    />
                    </div>
                    
                    <div>
                    <label className="label text-yellow-900">Email</label>
                    <input
                        type="email"
                        className="input input-bordered w-full"
                        placeholder="Enter your email"
                    />
                    </div>

                    <div>
                    <label className="label text-yellow-900">Password</label>
                    <input
                        type="password"
                        className="input input-bordered w-full"
                        placeholder="Enter your password"
                    />
                    </div>

                    <button className="btn bg-yellow-900 text-white hover:bg-yellow-800 w-full mt-4">
                    Register
                    </button>
                </div>
                </div>

            </div>
        </div>
    );
}

export default Register