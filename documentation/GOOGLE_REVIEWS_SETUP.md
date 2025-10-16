# Google Reviews Integration Setup Guide

## Overview

This guide will help you set up Google Business reviews integration for your RentaBikeParis website. The system will automatically fetch the latest 9 reviews from your Google Business Profile and display them on your testimonials section.

## Prerequisites

- Google Cloud Platform account
- Google Business Profile for RentaBikeParis
- Your business Place ID (already configured as `GOOGLE_BUSINESS_ID`)

## Step 1: Enable Google Places API

1. Go to the [Google Cloud Console](https://console.cloud.google.com/)
2. Select your project or create a new one
3. Navigate to "APIs & Services" > "Library"
4. Search for "Places API"
5. Click on "Places API" and enable it

## Step 2: Create API Key

1. In the Google Cloud Console, go to "APIs & Services" > "Credentials"
2. Click "Create Credentials" > "API Key"
3. Copy the generated API key
4. (Optional) Restrict the API key to only work with Places API for security

## Step 3: Configure Environment Variables

Add the following environment variable to your `.env.local` file:

```bash
GOOGLE_PLACES_API_KEY="your_api_key_here"
```

## Step 4: Verify Your Business Place ID

Your `GOOGLE_BUSINESS_ID` should be the Place ID of your Google Business Profile. You can find this by:

1. Go to [Google Place ID Finder](https://developers.google.com/maps/documentation/places/web-service/place-id)
2. Search for "RentaBikeParis" or your business address
3. Copy the Place ID and update your `.env.local`:

```bash
GOOGLE_BUSINESS_ID="your_place_id_here"
```

## Step 5: Test the Integration

1. Start your development server: `pnpm dev`
2. Navigate to your testimonials section
3. Check the browser console for any errors
4. The system will automatically fallback to static testimonials if Google API fails

## Features Implemented

✅ **Google Places API Integration**: Fetches reviews from your Google Business Profile
✅ **Automatic Fallback**: Falls back to static testimonials if API fails
✅ **Dynamic Star Ratings**: Shows actual review ratings from Google
✅ **Loading States**: Displays loading spinner while fetching data
✅ **Error Handling**: Graceful error handling with fallback
✅ **Caching**: Reviews are cached for 1 hour to improve performance
✅ **TypeScript Support**: Fully typed implementation

## API Endpoints

- `GET /api/reviews?limit=9` - Fetches Google reviews (limit is optional, defaults to 9)

## Troubleshooting

### Common Issues

1. **"Failed to fetch reviews" error**

   - Check if your API key is correct
   - Verify that Places API is enabled
   - Ensure your Place ID is correct

2. **No reviews showing**

   - Check if your Google Business Profile has reviews
   - Verify the Place ID matches your business
   - Check browser console for detailed error messages

3. **API quota exceeded**
   - Google Places API has usage limits
   - The system will automatically fallback to static testimonials

### Debug Mode

To debug the integration, check the browser console and network tab for:

- API request/response details
- Error messages
- Fallback behavior

## Security Notes

- Keep your API key secure and never commit it to version control
- Consider restricting your API key to specific domains/IPs
- Monitor your API usage in the Google Cloud Console

## Next Steps

1. Test the integration thoroughly
2. Monitor API usage and costs
3. Consider implementing review caching for better performance
4. Add review moderation if needed

## Support

If you encounter any issues, check:

1. Google Cloud Console for API status
2. Browser console for error messages
3. Network tab for API request details
4. This documentation for troubleshooting steps

