import './flex-body.styles.css';

const FlexBody = () => {
    function checkEmail() {
        const input = document.getElementsByClassName('flex-body-input')[0];

        if(input.value.includes('@')) {
            input.value = 'Email Successfully Sent';
            input.style.color = 'green';

            setTimeout(function() {
                window.location.replace('http://localhost:3000/calendar');
            }, 1500);
        } else {
            input.value = 'Email Failed to Send';
            input.style.color = 'red';
        }
    }

    function checkKey(event) {
        const input = document.getElementsByClassName('flex-body-input')[0];

        if(event.key === "Enter") {
            checkEmail();
        } else {
            if(input.value === 'Email Successfully Sent' || input.value === 'Email Failed to Send') {
                updateColor();
            }
        }
    }

    function updateColor() {
        const input = document.getElementsByClassName('flex-body-input')[0];

        if(input.value === 'Email Successfully Sent' || input.value === 'Email Failed to Send') {
            input.value = '';
            input.style.color = 'black';
        }
    }

    return(
        <div className='flex-body-container'>
            <div className='flex-inner-body-container'>
                <h1 className='flex-body-header'>Learn Flex.</h1>
                <p className='flex-body-about'>
                    It's time to start organizing. With Flex, your able to maximize efficiency. 
                    View schedules, add or drop employees to assignments, and track updates. 
                    Manage your projects from home to office-accomplish it all with Flex.
                </p>
                <div className='flex-body-sign-up'>
                    <input type='email' placeholder='Email' className='flex-body-input' onClick={updateColor} onKeyDown={checkKey}></input>
                    <button className='sign-up' onClick={checkEmail}>Sign up - it's free</button>
                </div>
            </div>
        </div>
    );
}

export default FlexBody;