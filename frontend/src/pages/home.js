function Home() {
    return (
        <form>
            <label for='username'> Username </label>
            <input type='text' name='username' id='username' />
            <label for='password'> Password </label>
            <input type='text' name='password' id='password' />
            <button type='submit'> Submit </button>
        </form>  
    )
}

export default Home